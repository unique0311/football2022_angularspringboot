import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../service/data/player.service';
@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
  }
  HandleAddPlayer(val:any){
    return this.playerService.handleAddPlayer(val);
  }
}
