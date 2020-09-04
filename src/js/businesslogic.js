export default class Calculator {
  earthuser(earthage, sex) {
    this.earthage = 0;
    this.sex = sex;
    this.planetaryages = [];
  }

  function mercuryAge() {
    let ageReturned = (earthage * 0.24)
    return ageReturned
  }
}
