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
 id=''
 name='';
 content = '';
 SemiFinal=false;
 quartFinal=false;
 Final = false;
 numbrCups = 0;
 flag = "";
 
  constructor(private TeamsService: TeamServiceService,public HardcodedAuthenticationService:HardcodedAuthenticationService) { }
  
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
  delete(id:any){
    this.TeamsService.deleteTeam(id).subscribe(() => console.log("Team deleted"))
    window.location.reload();
  }
}