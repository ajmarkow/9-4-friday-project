export default class Calculator {
  earthuser() {
    this.earthAge = 0;
    this.sex = String;
    this.planets = [];
    this.planetaryages = [];
    this.lifeExpectancy = 0;
  }

  planetaryConvert() {
    let ageArray = [];
    let mercuryAgeReturned = (this.earthAge / 0.24).toFixed(2);
    ageArray.push(mercuryAgeReturned);
    console.log(mercuryAgeReturned);
    let venusAgeReturned = (this.earthAge / 0.62).toFixed(2);
    ageArray.push(venusAgeReturned);
    let marsAgeReturned = (this.earthAge / 1.88).toFixed(2);
    ageArray.push(marsAgeReturned);
    let jupiterAgeReturned = (this.earthAge / 11.86).toFixed(2);
    ageArray.push(jupiterAgeReturned);

    return ageArray;
  }

  getLifeExpectancy() {
    let lifeExpectancy = 0;
    if (this.sex === "male") {
      lifeExpectancy += 70;
    } else if (this.sex === "female") {
      lifeExpectancy += 72;
    } else if (this.sex === "nonbinary") {
      lifeExpectancy += 71;
    }
    return lifeExpectancy;
  }
}
