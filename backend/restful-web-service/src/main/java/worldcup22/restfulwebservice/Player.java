package worldcup22.restfulwebservice;

public class Player {
  private String fullName;
  private String position;
  private int Number;
  private int Age;
  private int numberGoals;
  private int numberYellowCards;
  private int getNumberRedCards;

  public Player(String fullName, String position, int number, int age, int numberGoals, int numberYellowCards, int getNumberRedCards) {
    this.fullName = fullName;
    this.position = position;
    Number = number;
    Age = age;
    this.numberGoals = numberGoals;
    this.numberYellowCards = numberYellowCards;
    this.getNumberRedCards = getNumberRedCards;
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
    return Number;
  }

  public void setNumber(int number) {
    Number = number;
  }

  public int getAge() {
    return Age;
  }

  public void setAge(int age) {
    Age = age;
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
