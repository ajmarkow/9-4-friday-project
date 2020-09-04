import Calculator from "./src/js/businesslogic";

import earthuser from "./src/js/businesslogic";
import mercuryAge from "./src/js/businesslogic";

describe("person", () => {
  test("user object stores earthAge.", () => {
    const testperson = new earthuser();
    testperson.earthAge = 1;
    expect(testperson.earthAge).toEqual(1);
  });

  test("user object property planetaryLifeExpectancy stores life expectancy in array.", () => {
    const testperson = new earthuser();
    testperson.planetaryLifeExpectancy = [1, 2, 3, 4];
    expect(testperson.planetaryLifeExpectancy).toEqual([1, 2, 3, 4]);
  });

  test("user object stores sex property. ", () => {
    const testperson = new earthuser();
    testperson.sex = "male";
    expect(testperson.sex).toEqual("male");
  });

  test("user object stores an array of numbers in planetary age array. ", () => {
    const testperson = new earthuser();
    testperson.planetaryAges = [1, 2, 3, 4];
    expect(testperson.planetaryAges).toEqual([1, 2, 3, 4]);
  });

  test("user object planets array stores list of planets. ", () => {
    const testperson = new earthuser();
    testperson.planets = ["Mercury", "Venus", "Mars", "Jupiter"];
    expect(testperson.planets).toEqual(["Mercury", "Venus", "Mars", "Jupiter"]);
  });

  test("earthuser property getlife expectancy modifies the earthuser object. ", () => {
    const testperson = new earthuser();
    testperson.sex = "female";
    testperson.earthAge = 2;
    testperson.getLifeExpectancy();
    expect(testperson.lifeExpectancy).toEqual(72);
  });

  test("user object stores lifeExpectancy property. ", () => {
    const testperson = new earthuser();
    testperson.lifeExpectancy = 70;
    expect(testperson.lifeExpectancy).toEqual(70);
  });

  test("planetaryAge property returns earthAge  divided by planetary coefficient for Mercury, Venus, Mars, and Jupiter ", () => {
    const testperson = new earthuser();
    testperson.earthAge = 2;
    testperson.planetaryAges = testperson.planetaryConvert();
    expect(testperson.planetaryAges).toEqual(["8.33", "3.23", "1.06", "0.17"]);
  });

  test("Test if life expectancy is set based upon gender for males.", () => {
    const testperson = new earthuser();
    testperson.sex = "male";
    expect(testperson.getLifeExpectancy()).toEqual(70);
  });

  test("Test if life expectancy is set based upon gender for females.", () => {
    const testperson = new earthuser();
    testperson.sex = "female";
    expect(testperson.getLifeExpectancy()).toEqual(72);
  });

  test("Test if life expectancy is set based upon gender for nonbinary people.", () => {
    const testperson = new earthuser();
    testperson.sex = "nonbinary";
    expect(testperson.getLifeExpectancy()).toEqual(71);
  });

  // test("Tests if life ((expectancy - earthage) * planetaryConvert) is pushed to planetary life expectancy array", () => {
  //   const testperson = new earthuser();
  //   testperson.earthAge = 71;
  //   expect(testperson.populatePlanetaryLifeExpectancy()).toEqual([
  //     295.83,
  //     114.52,
  //     37.77,
  //     5.986,
  //   ]);
  // });

  test("Test if printResults properly uses template literal and returns values", () => {
    const testperson = new earthuser();
    testperson.earthAge = 2;
    testperson.sex = "female";
    testperson.lifeExpectancy = this.getLifeExpectancy;
    testperson.planetaryAges = testperson.planetaryConvert();
    expect(testperson.printResults).toEqual(
      "Your age on earth is {this.earthAge}.  Your age on Mercury, Venus,Mars and Jupiter respectively are {this.planetaryAges}.  Your life expectancy is {this.lifeExpectancy}.  Your gender is {this.sex}."
    );
  });
});
