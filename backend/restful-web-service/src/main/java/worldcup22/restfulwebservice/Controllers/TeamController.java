package worldcup22.restfulwebservice.Controllers;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import worldcup22.restfulwebservice.Models.Team;
import worldcup22.restfulwebservice.Repository.TeamRepository;
import worldcup22.restfulwebservice.Repository.PlayerRepository;
import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TeamController {
  private final TeamRepository teamRepository;

  public TeamController( TeamRepository teamRepository) {
    this.teamRepository = teamRepository;
  }

  @GetMapping("/teams")
  public ResponseEntity<List<Team>> getAllTeams() {
    return ResponseEntity.ok(this.teamRepository.findAll());
  }
  @PostMapping("/team")
  public ResponseEntity<Team> createTeam(@RequestBody Team team){
      return ResponseEntity.ok(this.teamRepository.save(team));
  }

}
