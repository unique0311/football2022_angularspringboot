import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import {MatchService} from '../service/data/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches:any;
 
  constructor(private matchService: MatchService, private router:Router,public HardcodedAuthenticationService:HardcodedAuthenticationService) { }
   closeResult = '';
  ngOnInit(): void {
    this.getMatches()
    this.currentMatch = {
      tame:"",
      date:"",
      team1:{
        name:'',
        flag:''
      },
      team2:{
        name:'',
        flag:''
      }
    }
  }
  getMatches(){
    this.matchService.matchService().subscribe(
      response => this.getResp(response)
    )
   
  }
 today = new Date();
 dateToday = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
 
  getResp(res:any){
    this.matches=res;
    console.log(this.matches)
    console.log("date lyoum ==>",this.dateToday)
  }
  setId(match:any){
    this.currentMatch = match;
    this.currentMatchId = match.id
    console.log("Current match => ",this.currentMatch)
  }
  currentMatchId:any;
  currentMatch:any;
  
  delete(player:any){
    let id = player;
      this.matchService.deleteMatch(id).subscribe(() => console.log("player deleted"))
      window.location.reload();
  }



  HandleUpdateMatch(val:any){
      console.log("value = ",val)
      this.matchService.handleUpdateMatch(val,this.currentMatchId);
      window.location.reload();
  }

}
