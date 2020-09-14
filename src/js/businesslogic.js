export default class earthuser {
  constructor() {
    this.earthAge = 0;
    this.sex = String;
    this.planets = [];
    this.planetaryAges = [];
    this.planetaryLifeExpectancy = [];
    this.lifeExpectancy = 0;
    this.remainingLifeExpectancy = [];
  }

  planetaryConvert() {
    let ageArray = [];
    let mercuryAgeReturned = (parseFloat(this.earthAge) / 0.24).toFixed(2);
    ageArray.push(mercuryAgeReturned);
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

  getRemain() {
    this.remainingLifeExpectancy = this.planetaryAges;
    const c = this.planetaryLifeExpectancy;
    console.log(c);
    this.remainingLifeExpectancy.map((element) => (element - c).toFixed(2));
    return this.remainingLifeExpectancy;
  }

  printResults() {
    return `Your age on earth is ${this.earthAge}.  Your age on Mercury, Venus,Mars and Jupiter respectively are ${this.planetaryAges}.  Your life expectancy on earth is ${this.lifeExpectancy}.  Your gender is ${this.sex}.`;
  }

  populatePlanetaryLifeExpectancy() {
    let temporaryArray = [];
    temporaryArray.push(
      (parseFloat(this.lifeExpectancy) / 0.24).toFixed(2),
      (parseFloat(this.lifeExpectancy) / 0.62).toFixed(2),
      (parseFloat(this.lifeExpectancy) / 1.88).toFixed(2),
      (parseFloat(this.lifeExpectancy) / 11.86).toFixed(2)
    );
    return temporaryArray;
  }
}
