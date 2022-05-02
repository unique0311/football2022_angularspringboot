import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../service/data/player.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  url:any;
  constructor(private playerService: PlayerService,private router:Router) { }

  ngOnInit(): void {
  }
  HandleAddPlayer(val:any){
    val.pic = this.url;
    this.playerService.handleAddPlayer(val);
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
}
