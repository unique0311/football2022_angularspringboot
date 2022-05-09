package world.cup.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import world.cup.models.Team;
import world.cup.repositories.TeamRepository;


import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TeamController {
    private final TeamRepository teamRepository;

    public TeamController( TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @GetMapping("/teams")
    public ResponseEntity<List<Team>> getAllTeams() {
        return ResponseEntity.ok(this.teamRepository.findAll());
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/team")
    public ResponseEntity<Team> createTeam(@RequestBody Team team){
        return ResponseEntity.ok(this.teamRepository.save(team));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/team/delete/{id}")
    public void deleteTeam(@PathVariable("id") Integer id){
        teamRepository.deleteById(id);
    }
}