import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Auth0Service } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: Auth0Service, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(!this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
      return false
    } 
    return true;
  }
}