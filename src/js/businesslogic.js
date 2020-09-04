export default class Calculator {
  earthuser() {
    this.earthAge = 0;
    this.sex = String;
    this.planets = [];
    this.planetaryages = [];
    this.planetaryLifeExpectancy = [];
    this.lifeExpectancy = 0;
  }

  planetaryConvert() {
    let ageArray = [];
    let mercuryAgeReturned = (parseFloat(this.earthAge) / 0.24).toFixed(2);
    ageArray.push(mercuryAgeReturned);
    console.log(mercuryAgeReturned);
    let venusAgeReturned = (parseFloat(this.earthAge) / 0.62).toFixed(2);
    ageArray.push(venusAgeReturned);
    let marsAgeReturned = (parseFloat(this.earthAge) / 1.88).toFixed(2);
    ageArray.push(marsAgeReturned);
    let jupiterAgeReturned = (parseFloat(this.earthAge) / 11.86).toFixed(2);
    ageArray.push(jupiterAgeReturned);

    return ageArray;
  }

  getLifeExpectancy() {
    let lifeExpectancy = 0;
    if (this.sex === "male") {
      lifeExpectancy += 70;
      this.lifeExpectancy = 70;
    } else if (this.sex === "female") {
      lifeExpectancy += 72;
      this.lifeExpectancy = 72;
    } else if (this.sex === "nonbinary") {
      lifeExpectancy += 71;
      this.lifeExpectancy = 71;
    }
    return lifeExpectancy;
  }
}
