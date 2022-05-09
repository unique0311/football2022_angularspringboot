package world.cup;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;



@SpringBootApplication
@EnableJpaRepositories(basePackages="world.cup")
public class WorldcupApplication {

	public static void main(String[] args) {
		SpringApplication.run(WorldcupApplication.class, args);
	}

}
