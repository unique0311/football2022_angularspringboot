import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export class Players{
  constructor(
    private id : any,
    private pic :any,
    private fullName: string,
    private position: string,
    private number: number,
    private age : number,
    private numberGoals:number,
    private numberYellowCards: number,
    private getNumberRedCards:number,
    private nationality:any,
  ) { }
}
@Injectable({
  providedIn: 'root'
})

export class PlayerService {
  constructor(
    private http:HttpClient
    ){}

  playerService(){
    let token =  sessionStorage.getItem('Token')
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " +token); 
    return this.http.get<any[]>('http://localhost:8090/players',{headers: headers_object})
  }

  handleAddPlayer(data:any){
    let token =  sessionStorage.getItem('Token')
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " +token); 
    let url = "http://localhost:8090/player"
    try {
      return this.http.post(url,data,{headers: headers_object}).subscribe(
        response=>console.log(response)
      );
   }
   catch (e) {
      return null;
   }
  }
  deletePlayer(id:any){
    let token =  sessionStorage.getItem('Token')
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " +token); 
    console.log(id) 
    let baseUrl = `http://localhost:8090/player/delete/${id}`
    console.log("Url ==> ",baseUrl)
     return this.http.delete(baseUrl,{headers: headers_object}) 
  }

  handleUpdatePlayer(data:any,id:any){
    let token =  sessionStorage.getItem('Token')
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " +token); 
    let url = "http://localhost:8090/player/"+id
    try {
      return this.http.put(url,data,{headers: headers_object}).subscribe(
        response=>console.log("Match data ===>",response)
      );
     
      
   }
   catch (e) {
      return null;
   }
  }
}
 

 

