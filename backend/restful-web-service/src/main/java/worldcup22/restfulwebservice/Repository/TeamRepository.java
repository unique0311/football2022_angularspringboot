package worldcup22.restfulwebservice.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import worldcup22.restfulwebservice.Models.Team;

public interface TeamRepository extends MongoRepository <Team,String>{

}
