import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private _router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean {
      
      let user = localStorage.getItem('user');
      if(user){
        const User = JSON.parse(user);
        return User.role === 'admin' || User.role === 'teacher' || User.role === 'student';
      } else {
      this._router.navigate(['/login']);
      return false
      }
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean {
      let user = localStorage.getItem('user');
      if(user){
        const User = JSON.parse(user);
        return User.role === 'admin';
      } else {
      this._router.navigate(['/dashboard']);
      return false
      }
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean {

      let user = localStorage.getItem('user');
      if(user){
        const User = JSON.parse(user);
        return User.role === 'admin' || User.role === 'teacher' || User.role === 'student';
      } else {
      this._router.navigate(['/login']);
      return false
      }
  }

  getUserRole() {
    let user = localStorage.getItem('user');
    if(user){
      const User = JSON.parse(user);
      return User.role;
    }
  }

  getUserToken() {
    let authorization = localStorage.getItem('token');
      return authorization;
  }

  getUserId() {
    let userLoged = localStorage.getItem('user');
      return userLoged;    
  }
}