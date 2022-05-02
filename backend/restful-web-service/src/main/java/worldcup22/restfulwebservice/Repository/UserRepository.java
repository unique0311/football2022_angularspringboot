package worldcup22.restfulwebservice.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import worldcup22.restfulwebservice.Models.User;

public interface UserRepository extends MongoRepository<User,String> {
    User findByUsername(String username);
}
