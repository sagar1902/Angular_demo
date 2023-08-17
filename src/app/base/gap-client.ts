/*
 # gap map client created by gurpreet singh
*/
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpOption } from './http-options';

export abstract class GapClient 
{
  constructor(protected http: HttpClient) { }

  protected get<T>(url: string, options?: HttpOption): Observable<T> {
     if(!options) {
       options = new HttpOption();
     }
     if(!options.headers) {
        options.headers = {'content-type': 'application/json'};
     }
     options.withCredentials = true;
     return this.http.get<T>(url, {});
  }

  protected post<T>(url: string, body: any | null, options?: HttpOption): Observable<T> {
    //  if(!options) {
    //    options = new HttpOption();
    //  } 
    //  if(!options.headers) {
    //    options.headers = {'content-type': 'application/json'};
    //  }
    //  options.withCredentials = true;
     return this.http.post<T>(url, body, {});
  }

}
