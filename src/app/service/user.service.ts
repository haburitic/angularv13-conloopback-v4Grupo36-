import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  register(user: User): Observable<any>{
    return this.http.post('signup',user);
  }

  login(user: User): Observable<any>{
    return this.http.post('users/login',user);
  }
}
