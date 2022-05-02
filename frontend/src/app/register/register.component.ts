import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient , HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username='';
  password= '';
  email = '';
  role=['user'];
  obj="";
  constructor(
    private router:Router,
    private http:HttpClient,
  ) { }

  ngOnInit(): void {
  }
  handleRegister(data:any){
    data.role = this.role;
    let url = "http://localhost:8090/api/auth/signup"
    try {
      this.http.post(url,data).subscribe(
         response=>{
           console.log(response);
         }
      );
      console.log("dataa ==> ",data);
    }catch(e){
      console.log("failed to register");
    }
  }
}
