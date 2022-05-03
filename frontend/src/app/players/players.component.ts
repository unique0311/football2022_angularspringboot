import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../service/data/player.service'
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  Players:any;
  key="";
  constructor(private PlayerService: PlayerService, private router:Router,public HardcodedAuthenticationService:HardcodedAuthenticationService) { }
  fltr:any;
  ngOnInit(): void {
    this.getPlayer()
  }
  getPlayer(){
    this.PlayerService.playerService().subscribe(
      response => this.getResp(response)
    )
  }
  getResp(res:any){
    this.Players=res;
    console.log(this.Players)
  }
  delete(id:any){
    this.PlayerService.deletePlayer(id).subscribe(() => console.log("player deleted"))
    window.location.reload();
  }
  
  handleSearch(val:any){
    this.fltr = val.value;
   
  }
}
