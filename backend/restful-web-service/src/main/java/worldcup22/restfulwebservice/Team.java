package worldcup22.restfulwebservice;

public class Team {
  private String name;
  private String content;
  private boolean SemiFinal;
  private boolean quartFinal;
  private boolean Final;
  private int numbrCups;

  public Team(String name, String content, boolean semiFinal, boolean quartFinal, boolean aFinal, int numbrCups) {
    this.name = name;
    this.content = content;
    SemiFinal = semiFinal;
    this.quartFinal = quartFinal;
    Final = aFinal;
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
    return SemiFinal;
  }

  public void setSemiFinal(boolean semiFinal) {
    SemiFinal = semiFinal;
  }

  public boolean isQuartFinal() {
    return quartFinal;
  }

  public void setQuartFinal(boolean quartFinal) {
    this.quartFinal = quartFinal;
  }

  public boolean isFinal() {
    return Final;
  }

  public void setFinal(boolean aFinal) {
    Final = aFinal;
  }

  public int getNumbrCups() {
    return numbrCups;
  }

  public void setNumbrCups(int numbrCups) {
    this.numbrCups = numbrCups;
  }
}
