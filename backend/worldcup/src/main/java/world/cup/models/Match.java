package world.cup.models;

import javax.persistence.*;

@Entity
@Table(name = "Matches")
public class Match {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String date;
    private Integer nbButTeam1;
    private Integer nbButTeam2;
    private String stadium;
    private String refree;
    private Integer possesionTeam1;
    private String time;

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    @ManyToOne
    private Team team1;
    @ManyToOne
    private Team team2;

    public Match(){}
    public Match(String time, String date, Team team2, Team team1) {
        this.date = date;
        this.team1 = team1;
        this.team2 = team2;
        this.time = time;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getNbButTeam1() {
        return nbButTeam1;
    }

    public void setNbButTeam1(Integer nbButTeam1) {
        this.nbButTeam1 = nbButTeam1;
    }

    public Integer getNbButTeam2() {
        return nbButTeam2;
    }

    public void setNbButTeam2(Integer nbButTeam2) {
        this.nbButTeam2 = nbButTeam2;
    }

    public String getStadium() {
        return stadium;
    }

    public void setStadium(String stadium) {
        this.stadium = stadium;
    }

    public String getRefree() {
        return refree;
    }

    public void setRefree(String refree) {
        this.refree = refree;
    }

    public Integer getPossesionTeam1() {
        return possesionTeam1;
    }

    public void setPossesionTeam1(Integer possesionTeam1) {
        this.possesionTeam1 = possesionTeam1;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Team getTeam2() {
        return team2;
    }

    public void setTeam2(Team team2) {
        this.team2 = team2;
    }

    public Team getTeam1() {
        return team1;
    }

    public void setTeam1(Team team1) {
        this.team1 = team1;
    }

}
