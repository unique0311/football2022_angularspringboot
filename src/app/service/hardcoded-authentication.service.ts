import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
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
}
