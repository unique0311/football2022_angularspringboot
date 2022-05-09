package world.cup.models;

import javax.persistence.*;

@Entity
@Table(name = "players")
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Lob
    private String pic;
    private String fullName;
    private String position;
    private int number;
    private int age;
    private int numberGoals;
    private int numberYellowCards;
    private int getNumberRedCards;

    @ManyToOne
    private Team nationality;

    public Team getNationality() {
        return nationality;
    }

    public void setNationality(Team nationality) {
        this.nationality = nationality;
    }

    public Player(){}
    public Player(Team nationality, String id, String pic, String fullName, String position, int number, int age, int numberGoals, int numberYellowCards, int getNumberRedCards) {
        this.pic = pic;
        this.nationality = nationality;
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

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
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
