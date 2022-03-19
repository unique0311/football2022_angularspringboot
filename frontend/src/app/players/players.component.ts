import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../service/data/player.service'
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
Players = [
  {
    "pic":"",
    "fullName": "Cristiano Ronaldo",
    "position": "ST",
    "number": 7,
    "age": 36,
     "numberGoals": 5,
    "numberYellowCards": 2,
    "getNumberRedCards": 0
}
]
  constructor(private PlayerService: PlayerService) { }

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
}
