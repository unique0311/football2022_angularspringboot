package worldcup22.restfulwebservice;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TeamController {
  @GetMapping(path="/teams")
  public Team[] team(){
    Team [] Teams = new Team [2];
    Team team1 =  new Team ("Brazil","America",true,true,true,7);
    Team team2 =  new Team ("Tunisia","Africa",false,false,false,0);
    Teams[0]=team1;
    Teams[1]=team2;
    return Teams;
  }
}
