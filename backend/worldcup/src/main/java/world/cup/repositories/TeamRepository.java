package world.cup.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import world.cup.models.Team;
import org.springframework.stereotype.Repository;
@Repository
public interface TeamRepository extends JpaRepository<Team,Integer> {

}

