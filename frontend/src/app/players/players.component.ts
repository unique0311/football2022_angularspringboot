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
  currentplayerId:any;
  key="";
  constructor(private PlayerService: PlayerService, private router:Router,public HardcodedAuthenticationService:HardcodedAuthenticationService) { }
  fltr:any;
  ngOnInit(): void {
    this.getPlayer();
    this.currentPlayer = {};
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
  delete(player:any){
    let id = player;
    console.log("playuer==>",player)
      this.PlayerService.deletePlayer(id).subscribe(() => console.log("player deleted"))
      window.location.reload();
  }
  currentPlayer:any;
  handleSearch(val:any){
    this.fltr = val.value;
   
  }
  HandleUpdatePlayer(val:any){
    console.log("value = ",val)
    this.PlayerService.handleUpdatePlayer(val,this.currentplayerId);
    window.location.reload();
}
    setId(player:any){
      this.currentPlayer = player;
      this.currentplayerId = player.id;
      console.log("hah =>",this.currentPlayer)
    }
  
}
