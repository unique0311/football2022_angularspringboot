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

  ngOnInit(): void {
    this.getMatches()
  }
  getMatches(){
    this.matchService.matchService().subscribe(
      response => this.getResp(response)
    )
  }
  
  getResp(res:any){
    this.matches=res;
    console.log(this.matches)
  }
}
