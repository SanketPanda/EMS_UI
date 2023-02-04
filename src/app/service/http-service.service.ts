import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../component/department/model/department';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(
    private http: HttpClient
  ) { }

  get(url: string): Observable<any>{
    return this.http.get(environment.baseUrl+url);
  }

  post(url: string, content: any): Observable<any>{
    return this.http.post(environment.baseUrl+url, content);
  }

  put(url: string, content: any): Observable<any>{
    console.log('url is '+environment.baseUrl+url);
    return this.http.put(environment.baseUrl+url, content);
  }

  delete(url:string, contnet: any): Observable<any> {
    return this.http.delete(environment.baseUrl+url, {body:contnet});
  }
}
