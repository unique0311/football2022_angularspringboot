import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class Players{
  constructor(
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
  constructor(private http:HttpClient){}
  playerService(){
    return this.http.get<Players[]>('http://localhost:8080/players')
  }
}
 

 

