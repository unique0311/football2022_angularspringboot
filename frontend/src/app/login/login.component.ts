import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { HardcodedAuthenticationService as authService } from '../service/hardcoded-authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  obj: any
   

  constructor(
    private router:Router,
    private authService:authService,
    private http:HttpClient,
   
  ) {this.obj = [] }
  ngOnInit(): void {
    
  }
  username='';
  password='';
  LoggedIn=false;
  check = false;
  handleLogin(data:any){
    let url = "http://localhost:8090/api/auth/signin"
    try {
      console.log("dataa ==> ",data)
      return  this.http.post(url,data).subscribe(
          response => {
            //let token = response.token;
            this.obj = response;
            console.log(this.obj)
            sessionStorage.setItem('Token',this.obj.accessToken);
            sessionStorage.setItem('authenticatedUser',this.obj.username);
            sessionStorage.setItem('role',this.obj.roles);
            this.router.navigate(['/welcome']); 
            
           
          }
      );

   }
   catch (e) {
      return null;
   }
   
  }

 
}
