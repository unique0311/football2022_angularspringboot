package world.cup.models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.HashSet;
import java.util.Set;
import java.util.List;
import javax.persistence.*;

@Entity
@Table(name = "Teams")
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    //private String flag;
    private String name;
    private String content;
    private boolean semiFinal;
    private boolean quartFinal;
    private boolean isFinal;
    private int numbrCups;

    @Lob
    private String flag;

    @JsonIgnore
    @OneToMany( mappedBy="team1" , cascade = CascadeType.ALL)
    private List <Match> matchAsTeam1;

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag;
    }

    @JsonIgnore
    @OneToMany( mappedBy="team2", cascade = CascadeType.ALL)
    private List <Match> matchAsTeam2;

    @JsonIgnore
    @OneToMany( mappedBy="nationality", cascade = CascadeType.ALL)
    private List <Player> players;

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }

    public Team(){}

    public List<Match> getMatchAsTeam1() {
        return matchAsTeam1;
    }

    public void setMatchAsTeam1(List<Match> matchAsTeam1) {
        this.matchAsTeam1 = matchAsTeam1;
    }

    public List<Match> getMatchAsTeam2() {
        return matchAsTeam2;
    }

    public void setMatchAsTeam2(List<Match> matchAsTeam2) {
        this.matchAsTeam2 = matchAsTeam2;
    }

    public Team(List<Player> players,String flag, String name, String content, boolean semiFinal, boolean quartFinal, boolean isFinal, int numbrCups, List<Match> matchAsTeam1, List<Match> matchAsTeam2) {
        this.players = players;
        this.flag = flag;
        this.name = name;
        this.content = content;
        this.semiFinal = semiFinal;
        this.quartFinal = quartFinal;
        this.isFinal = isFinal;
        this.numbrCups = numbrCups;
        this.matchAsTeam1 = matchAsTeam1;
        this.matchAsTeam2 = matchAsTeam2;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public boolean isSemiFinal() {
        return semiFinal;
    }

    public void setSemiFinal(boolean semiFinal) {
        this.semiFinal = semiFinal;
    }

    public boolean isQuartFinal() {
        return quartFinal;
    }

    public void setQuartFinal(boolean quartFinal) {
        this.quartFinal = quartFinal;
    }

    public boolean isFinal() {
        return isFinal;
    }

    public void setFinal(boolean aFinal) {
        isFinal = aFinal;
    }

    public int getNumbrCups() {
        return numbrCups;
    }

    public void setNumbrCups(int numbrCups) {
        this.numbrCups = numbrCups;
    }
}
