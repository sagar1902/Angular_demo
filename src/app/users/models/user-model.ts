/*
  # UserRequest Bean Model created by gurpreet singh
*/
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as jwt_decode from 'jwt-decode';

export class UserRequest {
    _id?: string
    name?: string
    email?: string
    password?: string

    public instance(formBuilder: FormBuilder, user: any){
        return formBuilder.group({
            //email: ['', Validators.compose([Validators.required, Validators.email])],
            //password: ['', Validators.compose([Validators.required, Validators.pattern("^[A-Za-z0-9@#,.:]{8,15}$")])],
            email: ['', Validators.compose([Validators.required, null])],
            password: ['', Validators.compose([Validators.required, null])],
        });
   }

   public set(userRequest: UserRequest, formGroup: FormGroup){
        // userRequest.email = formGroup.get("email")!.value;
        // userRequest.password = formGroup.get("password")!.value;
        userRequest.email = formGroup.value?.email;
        userRequest.password = formGroup.value?.password;
        return userRequest;
   }

}


