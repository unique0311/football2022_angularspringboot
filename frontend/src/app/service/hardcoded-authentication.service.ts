import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  role = sessionStorage.getItem('role');
  constructor(private http: HttpClient) { }
  authenticate(username:any ,pass:any){
    if(username== 'dhia' && pass=='L@n@girou'){
      sessionStorage.setItem('authenticatedUser',username);
      return true;
    }  
    else 
      return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }
  isUserAdmin(){
    if(this.isUserLoggedIn() && this.role =="ROLE_ADMIN")
      return true;
    else 
      return false
  }
  isUserModerator(){
    if(this.isUserLoggedIn() && this.role =="ROLE_MODERATOR")
    return true;
  else 
    return false
  }
}
