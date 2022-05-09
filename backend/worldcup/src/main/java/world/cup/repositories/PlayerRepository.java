package world.cup.repositories;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import world.cup.models.*;

@Repository
public interface PlayerRepository extends JpaRepository<Player,Integer> {

}
