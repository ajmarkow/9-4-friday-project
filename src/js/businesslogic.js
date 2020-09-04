export default class Calculator {
  earthuser() {
    this.earthAge = 0;
    this.sex = sex;
    this.planets = [];
    this.planetaryages = [];
    this.lifeExpectancy = 0;
  }

  planetaryConvert() {
    let ageArray = [];
    let mercuryAgeReturned = parseFloat(this.earthAge * 0.24);
    ageArray.push(mercuryAgeReturned);
    console.log(mercuryAgeReturned);
    let venusAgeReturned = parseFloat(this.earthAge * 0.62);
    ageArray.push(venusAgeReturned);
    let marsAgeReturned = parseFloat(this.earthAge * 1.88);
    ageArray.push(marsAgeReturned);
    let jupiterAgeReturned = parseFloat(this.earthAge * 11.86);
    ageArray.push(jupiterAgeReturned);

    return ageArray;
  }
}
