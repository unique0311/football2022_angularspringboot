import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
export class matches{
  constructor(
    private id : any,
    private date: string,
    private time: string,
    private team1: string,
    private team2: number,
    private flag:any,
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor( private router:Router,private http:HttpClient) { }
  matchService(){
    let token =  sessionStorage.getItem('Token')
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " +token); 
    return this.http.get<any[]>('http://localhost:8090/matches',{headers: headers_object})
  }


  handleAddMatch(data:any){
    let token =  sessionStorage.getItem('Token')
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " +token); 
    let url = "http://localhost:8090/match"
    try {
      return this.http.post(url,data,{headers: headers_object}).subscribe(
        response=>console.log("Match data ===>",response)
      );
   }
   catch (e) {
      return null;
   }
  }

  handleUpdateMatch(data:any,id:any){
    let token =  sessionStorage.getItem('Token')
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " +token); 
    let url = "http://localhost:8090/match/"+id
    try {
      return this.http.put(url,data,{headers: headers_object}).subscribe(
        response=>console.log("Match data ===>",response)
      );
     
      
   }
   catch (e) {
      return null;
   }
  
  }

  deleteMatch(id:any){
    let token =  sessionStorage.getItem('Token')
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " +token); 
    console.log(id) 
    let baseUrl = `http://localhost:8090/match/delete/${id}`
    console.log("Url ==> ",baseUrl)
     return this.http.delete(baseUrl,{headers: headers_object}) 
  }
}
