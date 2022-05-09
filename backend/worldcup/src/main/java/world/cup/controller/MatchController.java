package world.cup.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import world.cup.models.Match;
import world.cup.repositories.MatchRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MatchController {
    private final MatchRepository matchRepository;

    public MatchController(MatchRepository matchRepository) {this.matchRepository = matchRepository;}
    @GetMapping("/matches")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<List<Match>> getAllMatches() {
        return ResponseEntity.ok(this.matchRepository.findAll());
    }

    @GetMapping("/match/{id}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public  Match getMatch(@PathVariable(value = "id") Integer id) {
        return this.matchRepository.findById(id).orElse(null);
    }

    @PostMapping("/match")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Match> createMatch(@RequestBody Match match){
        return ResponseEntity.ok(this.matchRepository.save(match));
    }

    @PutMapping("/match/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Match> UpdateMatch(@PathVariable(value = "id") Integer id,@RequestBody Match match) {
        Match myMatch = matchRepository.findById(id).orElse(null);;
        myMatch.setDate(match.getDate());
        myMatch.setTime(match.getTime());
        final Match UpdateMatch = matchRepository.save(myMatch);
        return ResponseEntity.ok(UpdateMatch);
    }


    @DeleteMapping("/match/delete/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteTeam(@PathVariable("id") Integer id){
        matchRepository.deleteById(id);
    }
}
