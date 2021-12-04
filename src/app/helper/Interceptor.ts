import { HTTP_INTERCEPTORS, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenStorageService} from '../service/token-storage.service';

@Injectable({
    providedIn: 'root'
  })
export class Interceptor implements HttpInterceptor{

  constructor(private tokenStorageService:TokenStorageService){}

  httpOptions={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

  TOKEN_HEADER_KEY ='Autorization';
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq =req;
    const  token = this.tokenStorageService.getToken();
    if(token!=null){
      authReq = req.clone({headers:this.httpOptions.headers.set(this.TOKEN_HEADER_KEY,token)});
    }else{
      authReq = req.clone({headers:this.httpOptions.headers});

    }
   return next.handle(authReq);
  }

}
