import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from '../service/data/team-service.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
Teams:any;
team:any;
fltr=""
currentTeam:any;
currentTeamId:any
key="name"
  constructor(private TeamsService: TeamServiceService,public HardcodedAuthenticationService:HardcodedAuthenticationService) { }
  
  ngOnInit(): void {
    this.getTeam()
    this.currentTeam={
      name:'',
      numbrCups:0,
      content:''
    }
  }
  getTeam(){
   this.TeamsService.teamService().subscribe(
     response => this.getResp(response)
   )
  }
  getResp(res:any){
    this.Teams=res.sort(this.compare);
    console.log(this.Teams)
  }
     compare( a:any, b:any ) {
    if ( a.last_nom < b.last_nom ){
      return -1;
    }
    if ( a.last_nom > b.last_nom ){
      return 1;
    }
    return 0;
  }
  delete(id:any){
    this.TeamsService.deleteTeam(id).subscribe(() => console.log("Team deleted"))
    window.location.reload();
  }

  setId(player:any){
    this.currentTeam = player;
    this.currentTeamId = player.id;

  }
  
  HandleUpdateTeam(val:any){
    console.log("value = ",val)
    this.TeamsService.handleUpdateTeam(val,this.currentTeamId);
    window.location.reload();
}
}