import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


export class Teams{
  constructor(
    public name:string,
    public content:string,
    public SemiFinal:boolean,
    public quartFinal:boolean,
    public Final:boolean,
    public numbrCups:number,
    public flag:any,
    ){}
}

@Injectable({
  providedIn: 'root'
})

export class TeamServiceService {
  constructor(
    private http: HttpClient
  ) { }
  teamService(){
    let token =  sessionStorage.getItem('Token')
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " +token); 
    return this.http.get<Teams[]>('http://localhost:8090/teams',{headers: headers_object})
  }
  handleGetResponse(response: any){
    console.log(response.name)
  }
  
  getImage(data:any){
    this.http.get(data.flag, { responseType: 'blob' })
  .subscribe(blob => {
    const reader = new FileReader();
    const binaryString = reader.readAsDataURL(blob);
    reader.onload = (event: any) => {
      console.log('Image in Base64: ', event.target.result);
    };

    reader.onerror = (event: any) => {
      console.log("File could not be read: " + event.target.error.code);
    };

  });
}

  handleAddTeam(data:any){
    console.log("data here ==>",data)
    this.getImage(data);
    let token =  sessionStorage.getItem('Token')
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " +token); 
    let url = "http://localhost:8090/team"
    try {
      return this.http.post(url,data,{headers: headers_object}).subscribe(
        response=>console.log(response)
      );
   }
   catch (e) {
      return null;
   }
  }

  deleteTeam(id:any){
    let token =  sessionStorage.getItem('Token')
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " +token); 
    console.log(id) 
    let baseUrl = `http://localhost:8090/team/delete/${id}`
    console.log("Url ==> ",baseUrl)
     return this.http.delete(baseUrl,{headers: headers_object}) 
     
  }

  handleUpdateTeam(data:any,id:any){
    let token =  sessionStorage.getItem('Token')
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " +token); 
    let url = "http://localhost:8090/team/"+id
    try {
      return this.http.put(url,data,{headers: headers_object}).subscribe(
        response=>console.log("Match data ===>",response)
      );
     
      
   }
   catch (e) {
      return null;
   }
  
  }
}
