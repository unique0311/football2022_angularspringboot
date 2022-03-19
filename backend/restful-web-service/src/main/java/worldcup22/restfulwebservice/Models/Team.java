package worldcup22.restfulwebservice.Models;

public class Team {
  //private String flag;
  private String name;
  private String content;
  private boolean semiFinal;
  private boolean quartFinal;
  private boolean isFinal;
  private int numbrCups;

  public Team(String name, String content, boolean semiFinal, boolean quartFinal, boolean isFinal, int numbrCups) {
    //this.flag = flag;
    this.name = name;
    this.content = content;
    this.semiFinal = semiFinal;
    this.quartFinal = quartFinal;
    this.isFinal = isFinal;
    this.numbrCups = numbrCups;
  }


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
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
