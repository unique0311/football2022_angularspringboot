import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../service/data/player.service';
import { Router } from '@angular/router';
import { TeamServiceService } from '../service/data/team-service.service';
@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  nt = {
    id:1
  }
  nationality : any;
  url:any;
  Teams:any;

  
  constructor(private playerService: PlayerService,private router:Router,private TeamsService:TeamServiceService) { }

  ngOnInit(): void {
    this.getTeam();
   
  }
  
  HandleAddPlayer(val:any){
    val.nationality = this.nt;
    val.pic = this.url;
    this.playerService.handleAddPlayer(val);
    console.log("Nothing")
    this.router.navigate(['/players']); 
    
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
      console.log(this.url)
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
  onChange(deviceValue:any) {
    console.log(deviceValue.value);
    this.nt.id = deviceValue.value;
  }

  
 
}
