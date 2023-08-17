import { Injectable } from "@angular/core";
import { GapClient } from "../base/gap-client";
import { HttpOption } from "../base/http-options";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
// import { UserRequest } from "./models/user-model";
// import { AssessmentRequest } from "./models/assessment-model";

@Injectable({
  providedIn: 'root'
})
export class UserService extends GapClient {

    options = new HttpOption();
    constructor(protected override http: HttpClient) {
       super(http)
    }

    // public loginUser(userRequest: UserRequest, type = ''): Observable<any> {
    //     const url = `${environment.ApiConfig.baseApiUrl}/auth/login`;
    //     return this.post<any>(url, userRequest);
    // }
    public loginUser(userRequest: any): any {
      const url = `${environment.ApiConfig.baseApiUrl}/auth/login`;
      return this.post<any>(url, userRequest);
    }

    public logoutUser(): any {
      localStorage.removeItem('token');
      return
    }

    public fetchCategories(token: string): Observable<any> {
        const url = `${environment.ApiConfig.baseApiUrl}/users/categories?accessToken=`+token;
        return this.get<any>(url);
    }

    public fetchUserjourney(token: string): Observable<any> {
        const url = `${environment.ApiConfig.baseApiUrl}/users/userJourney?accessToken=`+token;
        return this.get<any>(url);
    }

    // public saveAssessment(assessmentRequest: AssessmentRequest, token: string): Observable<any> {
    //     const url = `${environment.ApiConfig.baseApiUrl}/users/saveAssessment?accessToken=`+token;
    //     return this.post<any>(url, assessmentRequest);
    // }

    public fetchScore(token: string): Observable<any> {
        const url = `${environment.ApiConfig.baseApiUrl}/users/getScore?accessToken=`+token;
        return this.get<any>(url);
    }

}
