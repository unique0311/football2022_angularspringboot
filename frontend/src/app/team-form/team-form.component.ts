import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from '../service/data/team-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent implements OnInit { 
  //selectedFile = '';
  constructor(private TeamsService: TeamServiceService) { }

  ngOnInit(): void {
  }

   HandleAddTeam(val:any){
    return this.TeamsService.handleAddTeam(val);
   }
   
 
  //  onFileSelect(event:any){
  //     this.selectedFile=event.target.files[0];
  //     console.log(this.selectedFile)
  //  }
  
}
