package worldcup22.restfulwebservice.Controllers;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.web.bind.annotation.*;
import worldcup22.restfulwebservice.Models.Team;
import worldcup22.restfulwebservice.Models.User;
import worldcup22.restfulwebservice.Repository.UserRepository;

import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
    private final UserRepository userRepository;

    public UserController( UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(this.userRepository.findAll());
    }

    @PostMapping("/user")
    public ResponseEntity<User> createUser(@RequestBody User user){
        return ResponseEntity.ok(this.userRepository.save(user));
    }

}
