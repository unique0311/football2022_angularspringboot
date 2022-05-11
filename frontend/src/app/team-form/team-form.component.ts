import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from '../service/data/team-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent implements OnInit { 
  //selectedFile = '';
  constructor(private TeamsService: TeamServiceService,private router:Router) { }
  url:any;
  ngOnInit(): void {
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
   HandleAddTeam(val:any){
    val.flag  = this.url;
    this.TeamsService.handleAddTeam(val);
    this.router.navigate(['/teams']); 
   }
   
 
  //  onFileSelect(event:any){
  //     this.selectedFile=event.target.files[0];
  //     console.log(this.selectedFile)
  //  }
  
}
