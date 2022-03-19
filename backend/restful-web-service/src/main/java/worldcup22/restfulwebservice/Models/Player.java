package worldcup22.restfulwebservice.Models;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Document("Player")
public class Player {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private String id;
  private String pic;
  private String fullName;
  private String position;
  private int number;
  private int age;
  private int numberGoals;
  private int numberYellowCards;
  private int getNumberRedCards;

  public Player(String id, String pic, String fullName, String position, int number, int age, int numberGoals, int numberYellowCards, int getNumberRedCards) {
    this.id = id;
    this.pic = pic;
    this.fullName = fullName;
    this.position = position;
    this.number = number;
    this.age = age;
    this.numberGoals = numberGoals;
    this.numberYellowCards = numberYellowCards;
    this.getNumberRedCards = getNumberRedCards;
  }

  public String getPic() {
    return pic;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public void setPic(String pic) {
    this.pic = pic;
  }

  public String getFullName() {
    return fullName;
  }

  public void setFullName(String fullName) {
    this.fullName = fullName;
  }

  public String getPosition() {
    return position;
  }

  public void setPosition(String position) {
    this.position = position;
  }

  public int getNumber() {
    return number;
  }

  public void setNumber(int number) {
    this.number = number;
  }

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public int getNumberGoals() {
    return numberGoals;
  }

  public void setNumberGoals(int numberGoals) {
    this.numberGoals = numberGoals;
  }

  public int getNumberYellowCards() {
    return numberYellowCards;
  }

  public void setNumberYellowCards(int numberYellowCards) {
    this.numberYellowCards = numberYellowCards;
  }

  public int getGetNumberRedCards() {
    return getNumberRedCards;
  }

  public void setGetNumberRedCards(int getNumberRedCards) {
    this.getNumberRedCards = getNumberRedCards;
  }
}
