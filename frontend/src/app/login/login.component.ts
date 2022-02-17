import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  username='';
  password='';
  check = false;
  handleLogin():void{
    // if(this.username== 'dhia' || this.password == 'spaz' ) 
     this.router.navigate(['/welcome',this.username]);
  }
}
