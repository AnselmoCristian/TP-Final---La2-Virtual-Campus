import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    console.log('Hola');
    const token = localStorage.getItem('token');

    if(!token) {
      return next.handle(req);
    }    

    const headers = req.clone({
      headers: req.headers.set('authorization', `${token}`)
    });    
    
    return next.handle(headers);
  }
}