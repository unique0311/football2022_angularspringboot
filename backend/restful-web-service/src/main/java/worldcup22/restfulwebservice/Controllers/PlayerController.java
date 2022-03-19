package worldcup22.restfulwebservice.Controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import worldcup22.restfulwebservice.Models.Player;
import worldcup22.restfulwebservice.Repository.PlayerRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PlayerController {
  private final PlayerRepository playerRepository;

  public PlayerController(PlayerRepository playerRepository) {
    this.playerRepository = playerRepository;
  }
  @GetMapping("/players")
  public ResponseEntity<List<Player>>getAllPlayers() {
    return ResponseEntity.ok(this.playerRepository.findAll());
  }
  @PostMapping("/player")
  public ResponseEntity<Player> createPlayer(@RequestBody Player player){
    return ResponseEntity.ok(this.playerRepository.save(player));
  }
}
