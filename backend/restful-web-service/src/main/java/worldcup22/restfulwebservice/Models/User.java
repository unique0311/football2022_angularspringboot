package worldcup22.restfulwebservice.Models;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public class User {

  @Id
  @GeneratedValue
  private Long id;
  private String username;
  private String password;
  private String role;


  public User(String username, String password,String role) {
    this.username = username;
    this.password = password;
    this.role = role;
  }

  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
  }

  public Long getId() {
    return id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
