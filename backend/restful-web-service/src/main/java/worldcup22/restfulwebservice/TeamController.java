package worldcup22.restfulwebservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TeamController {
  @GetMapping(path="/teams")
  public Team team(){
    return new Team ("Brazil","Africa",false,false,false,7);
  }
}
