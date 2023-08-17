import { HttpParams, HttpHeaders } from '@angular/common/http';

/*
 # HttpOption used into gap client
*/
export class HttpOption {
    headers?: HttpHeaders | {[header: string]: string | string[]};
    observe?: 'body';
    params?: HttpParams | {[param: string]: string | string[]};
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
}


export interface HttpOptions {
  body?: any;
  headers?: any;
  params?: HttpParams;
  observer?: string;
  withCredentials?: boolean;
}
