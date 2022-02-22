import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService as authService } from '../service/hardcoded-authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router:Router,
    private authService:authService
  ) { }
  ngOnInit(): void {
    
  }
  username='';
  password='';
  LoggedIn=false;
  check = false;
  handleLogin():void{
     if( this.authService.authenticate(this.username,this.password)  ) {
      this.router.navigate(['/welcome',this.username]);
     }
    
  }

 
}
