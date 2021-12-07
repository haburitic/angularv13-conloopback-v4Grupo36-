import { HTTP_INTERCEPTORS, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenStorageService} from '../service/token-storage.service';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class Interceptor implements HttpInterceptor{

  constructor(private tokenStorageService:TokenStorageService){}


  TOKEN_HEADER_KEY ='Autorization';
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq=req;
    const token= this.tokenStorageService.getToken();
    if(token!=null){
      authReq=req.clone({
        headers:req.headers
        .append('Authorization','Bearer '+token)
        .append('Content-Type','application/json'),
        url: environment.url_backend+req.url
      });
    }else{
      authReq=req.clone({
        headers:req.headers
        .append('Content-Type','application/json'),
        url: environment.url_backend+req.url
      });
    }
    return next.handle(authReq);
  }

}
