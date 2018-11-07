import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthService} from '../auth-service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private AuthServ: AuthService
    ){  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean {
      return this.checkLogin(state.url);
  }


  checkLogin(url: string): boolean {
    if (this.AuthServ.isUserLoggedin()) { 
      return true;
    } else {
      this.AuthServ.login(url);
      return false
    }
  }
}
