import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router'
import {HardcodedAuthenticationService as authService } from '../service/hardcoded-authentication.service';
@Injectable({
  providedIn: 'root'
})
export class RouteGuardAdminService implements CanActivate {

  constructor(public authService:authService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.authService.isUserAdmin())
      return true;
   return false;
  }
}
