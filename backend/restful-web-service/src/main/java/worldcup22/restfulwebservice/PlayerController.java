package worldcup22.restfulwebservice;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PlayerController {
  @GetMapping(path="/players")
  public Player player(){
    return new Player("Cristiano Ronaldo","ST",7,36,200,0,0);
  }

}
