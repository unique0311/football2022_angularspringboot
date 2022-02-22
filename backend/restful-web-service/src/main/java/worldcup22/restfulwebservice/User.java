package worldcup22.restfulwebservice;

public class User {
  private String name;
  private String familyName;
  private int    cin ;
  private int    phone;

  public User(String name, String familyName, int cin, int phone) {
    this.name = name;
    this.familyName = familyName;
    this.cin = cin;
    this.phone = phone;
  }
  public String getName() {
    return name;
  }

  public String getFamilyName() {
    return familyName;
  }

  public int getCin() {
    return cin;
  }

  public int getPhone() {
    return phone;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setFamilyName(String familyName) {
    this.familyName = familyName;
  }

  public void setCin(int cin) {
    this.cin = cin;
  }

  public void setPhone(int phone) {
    this.phone = phone;
  }
}
