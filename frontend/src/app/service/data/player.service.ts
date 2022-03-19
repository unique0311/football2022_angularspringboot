import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class Players{
  constructor(
    private id : any,
    private fullName: string,
    private position: string,
    private number: number,
    private age : number,
    private numberGoals:number,
    private numberYellowCards: number,
    private getNumberRedCards:number,
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
    return this.http.get<Players[]>('http://localhost:8080/players')
  }

  handleAddPlayer(data:any){
    let url = "http://localhost:8080/player"
    try {
      return this.http.post(url,data).subscribe();
   }
   catch (e) {
      return null;
   }
  }
  deletePlayer(id:any){
    console.log(id) 
    let baseUrl = `http://localhost:8080/player/delete/${id}`
    console.log("Url ==> ",baseUrl)
     return this.http.delete(baseUrl);
  }
}
 

 

