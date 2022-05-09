package world.cup.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import world.cup.models.Match;
import world.cup.models.Player;
import world.cup.repositories.PlayerRepository;


import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PlayerController {
private final PlayerRepository playerRepository;

public PlayerController(PlayerRepository playerRepository) {
    this.playerRepository = playerRepository;
}
@GetMapping("/players")
@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
public ResponseEntity<List<Player>>getAllPlayers() {
    return ResponseEntity.ok(this.playerRepository.findAll());
}

@PostMapping("/player")
@PreAuthorize("hasRole('ADMIN')")
public ResponseEntity<Player> createPlayer(@RequestBody Player player){
    return ResponseEntity.ok(this.playerRepository.save(player));
}

@PutMapping("/player/{id}")
@PreAuthorize("hasRole('ADMIN')")
public ResponseEntity<Player> UpdatePlayer(@PathVariable(value = "id") Integer id, @RequestBody Player player) {
    Player myPlayer = playerRepository.findById(id).orElse(null);;
    myPlayer.setFullName(player.getFullName());
    myPlayer.setNumber(player.getNumber());
    myPlayer.setAge(player.getAge());
    myPlayer.setNumberGoals(player.getNumberGoals());
    myPlayer.setGetNumberRedCards(player.getGetNumberRedCards());
    myPlayer.setNumberYellowCards(player.getNumberYellowCards());
    final Player UpdatePlayer = playerRepository.save(myPlayer);
    return ResponseEntity.ok(UpdatePlayer);
}

@PreAuthorize("hasRole('ADMIN')")
@DeleteMapping("/player/delete/{id}")
public void deletePlayer(@PathVariable("id") Integer id){
    playerRepository.deleteById(id);
}
}
