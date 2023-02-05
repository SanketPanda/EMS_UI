import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../component/department/model/department';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  get(url: string): Observable<any>{
    return this.http.get(this.baseUrl+url);
  }

  post(url: string, content: any): Observable<any>{
    return this.http.post(this.baseUrl+url, content);
  }

  put(url: string, content: any): Observable<any>{
    console.log('url is '+this.baseUrl+url);
    return this.http.put(this.baseUrl+url, content);
  }

  delete(url:string, contnet: any): Observable<any> {
    return this.http.delete(this.baseUrl+url, {body:contnet});
  }
}
