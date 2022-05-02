package worldcup22.restfulwebservice.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import worldcup22.restfulwebservice.Models.User;
import worldcup22.restfulwebservice.Repository.UserRepository;
import worldcup22.restfulwebservice.security.AppUser;

@Service
public class AppUserDetailsService implements UserDetailsService {
    private UserRepository userRepository;

    public AppUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
        User user = new User("user","user","admin");
        //userRepository.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if(null==user) throw new UsernameNotFoundException("Username not found");
        return new AppUser(user);
    }
}
