package worldcup22.restfulwebservice.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.http.ResponseEntity;
import worldcup22.restfulwebservice.Models.Player;

public interface PlayerRepository extends MongoRepository<Player,String> {

}
