import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export class Teams{
  constructor(
    public name:string,
    public content:string,
    public SemiFinal:boolean,
    public quartFinal:boolean,
    public Final:boolean,
    public numbrCups:number,
    ){}
}

@Injectable({
  providedIn: 'root'
})

export class TeamServiceService {
  constructor(
    private http: HttpClient
  ) { }
  teamService(){
    return this.http.get<Teams[]>('http://localhost:8080/teams')
  }
  handleGetResponse(response: any){
    console.log(response.name)
  }
   
  handleAddTeam(data:any){
    let url = "http://localhost:8080/team"
    try {
      return this.http.post(url,data).subscribe();
   }
   catch (e) {
      return null;
   }

  
  }
}
