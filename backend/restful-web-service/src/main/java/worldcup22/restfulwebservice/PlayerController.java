package worldcup22.restfulwebservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PlayerController {
  @GetMapping(path="/players")
  public Player player(){
    return new Player("Cristiano Ronaldo","ST",7,36,200,0,0);
  }

}
