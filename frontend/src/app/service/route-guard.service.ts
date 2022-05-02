import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router'
import {HardcodedAuthenticationService as authService } from '../service/hardcoded-authentication.service';
@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(public authService:authService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.authService.isUserLoggedIn())
      return true;
    else {
      this.router.navigate(['/home']);
    }
   return false;
  }
}
