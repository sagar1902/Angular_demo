/*
  # UserRequest Bean Model created by gurpreet singh
*/ 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class AssessmentRequest {
    _id?: string
    questionId?: string
    today?: number
    future?: number
    attempt?: number
    total?: number
  
   /* public instance(formBuilder: FormBuilder, user: any){
        return formBuilder.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.compose([Validators.required, Validators.pattern("^[A-Za-z0-9@#,.:]{8,15}$")])],
        });
   }

   public set(assessmentRequest: AssessmentRequest, formGroup: FormGroup){
        assessmentRequest.current = formGroup.get("current")!.value;
        assessmentRequest.future = formGroup.get("future")!.value;
        return assessmentRequest;
   }*/

}


