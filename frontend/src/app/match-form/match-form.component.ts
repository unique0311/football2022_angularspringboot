import { Component, OnInit } from '@angular/core';
import {MatchService} from "../service/data/match.service"
import { TeamServiceService } from '../service/data/team-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-match-form',
  templateUrl: './match-form.component.html',
  styleUrls: ['./match-form.component.css']
})
export class MatchFormComponent implements OnInit {
  match = {
      "date": "",
      "time":"",
      "team2": {
          "id": 9
      },
      "team1": {
          "id": 11
      }
  }
  constructor(private matchService:MatchService, private TeamsService: TeamServiceService,private router:Router) { }
  team1:any;
  team2:any;
  Teams:any;
  ngOnInit(): void {
    this.getTeam();
  }
  HandleAddMatch(val:any){
    this.match.time = val.time;
    this.match.date = val.date;
    this.match.team1.id=val.team1;
    this.match.team2.id=val.team2;
    if(val.team1 == val.team2)alert("team1 and team2 can't be the same");
    else{
      this.matchService.handleAddMatch(this.match);
      this.router.navigate(['/matches']); 
    }
    
 
  }
  getTeam(){
    this.TeamsService.teamService().subscribe(
      response => this.getResp(response)
    )
   }
   getResp(res:any){
    this.Teams=res;
    console.log(this.Teams)
  }
  test(){
    console.log(this.team1,"  ",this.team2);
  }
}
