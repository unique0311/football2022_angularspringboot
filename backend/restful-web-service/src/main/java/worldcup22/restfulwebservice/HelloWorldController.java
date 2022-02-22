package worldcup22.restfulwebservice;

import org.springframework.web.bind.annotation.*;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {
  @GetMapping(path="/hello-world")
  public String helloWorld(){
    return "Hi";
  }
}
