import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../Services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private loginService : LoginServiceService,
    private route : Router){}
  canActivate()
  {
    if(this.loginService.isLoggedIn())
    {
      return true
    }
    return false;
  }
}
