import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../users.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRequest } from './../models/user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  @ViewChild('responsePopup') responsePopup?: ElementRef;
  submitting: boolean = false;
  userRequest = new UserRequest();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.router.navigate(['assessment']);
    }
  }

  onSubmit(form: any) {
    console.log(form);
    this.submitting = true;

    if (form.valid) {
      this.router.navigate(['home']);
      this.userRequest.set(this.userRequest, form);
      // this.userService.loginUser(this.userRequest).subscribe(response => {
      this.userService.loginUser(this.userRequest).subscribe(
        (response: { status: any; token: string }) => {
          console.log(response);
          if (response.status) {
            // var data = jwt_decode(response.token)
            // var resp = JSON.stringify(data);
            //console.log('token==>'+JSON.stringify(data))
            localStorage.setItem('token', response.token);
            // let obj = JSON.parse(resp);
            // localStorage.setItem('segmentId', obj.segmentId);
            form.reset();
            // this.clearData();
            this.router.navigate(['assessment']);
            // this.responsePopup!.nativeElement.innerHTML =
            //   '<p style="color:green" class="alert alert-success" role="alert">Login Successfully!</p>';
            // setTimeout(() => {
            //   this.responsePopup!.nativeElement.innerHTML = '';
            // }, 3000);
          }
        },
        (error: { error: { message: string } }) => {
          this.submitting = false;
          if (error.error instanceof ErrorEvent)
            this.responsePopup!.nativeElement.innerHTML =
              '<p class="alert alert-danger" role="alert">' +
              error.error.message +
              '</p>';
          else
            this.responsePopup!.nativeElement.innerHTML =
              '<p style="color:red" class="alert alert-danger" role="alert">' +
              error.error.message +
              '</p>';
          setTimeout(() => {
            this.responsePopup!.nativeElement.innerHTML = '';
          }, 3000);
        }
      );
    }
  }
}
