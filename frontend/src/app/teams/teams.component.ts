import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from '../service/data/team-service.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
 Teams = [{
  "name": "Brazil",
  "content": "Africa",
  "quartFinal": false,
  "numbrCups": 7,
  "final": false,
  "semiFinal": false
}]

 name='';
 content = '';
 SemiFinal=false;
 quartFinal=false;
 Final = false;
 numbrCups = 0;
 
  constructor(private TeamsService: TeamServiceService) { }
  
  ngOnInit(): void {
    this.getTeam()
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
}
