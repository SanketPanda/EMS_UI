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

  header = {'Authorization':'Bearer ya29.a0AVvZVsqnmUqWBp2UB-aFnVoWiqloNZ2bEDPaCMFAR1llDQ7PHQJ2tV74l2kVFP8BTXo5vYk0k7W4P6KooIOzFA_z_f2npgFDpO25j7lP7y8J1gd1zMvMAKCl74lX40YVzY5PIct18qpGX6a4SC2HZ0BXnFI4zPxZ_CndVRTBNSS7DkzdvCmJv84pwKjyQkxgn-xJARd8Xxu5BniIeF7IzlKCXrjRHHyyFQaCgYKAZESARESFQGbdwaI3qV2yBk6dCU457WerIYeog0233'};

  get(url: string): Observable<any>{
    return this.http.get(environment.baseUrl+url, {headers: this.header});
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
