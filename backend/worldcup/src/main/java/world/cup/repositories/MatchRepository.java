package world.cup.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import world.cup.models.Match;
import org.springframework.stereotype.Repository;
@Repository
public interface MatchRepository extends JpaRepository<Match,Integer> {

}

