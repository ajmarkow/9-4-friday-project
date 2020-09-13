import Calculator from "../src/js/businesslogic";

import earthuser from ".././src/js/businesslogic";
import mercuryAge from ".././src/js/businesslogic";

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

  test("Tests if populatePlanetaryLifeExpectancy  generates planetary life expectancy values.", () => {
    const testperson = new earthuser();
    testperson.lifeExpectancy = 71;
    expect(testperson.populatePlanetaryLifeExpectancy()).toEqual([
      "295.83",
      "114.52",
      "37.77",
      "5.99",
    ]);
  });

  test("Test if printResults properly uses template literal and returns values", () => {
    const testperson = new earthuser();
    testperson.earthAge = 2;
    testperson.sex = "female";
    testperson.lifeExpectancy = testperson.getLifeExpectancy();
    testperson.planetaryAges = testperson.planetaryConvert();
    let expectedoutput = testperson.printResults();
    expect(expectedoutput).toEqual(
      `Your age on earth is 2.  Your age on Mercury, Venus,Mars and Jupiter respectively are 8.33,3.23,1.06,0.17.  Your life expectancy on earth is 72.  Your gender is female.`
    );
  });

  test("Get remaining life expectancy.", () => {
    const testperson = new earthuser();
    testperson.sex = "female";
    testperson.earthuser = 70;
    testperson.lifeExpectancy = testperson.getLifeExpectancy();
    testperson.planetaryAges = testperson.planetaryConvert();
    testperson.planetaryLifeExpectancy = testperson.populatePlanetaryLifeExpectancy();
    expect(testperson.getRemain()).toEqual([8.33, 3.23, 1.06, 0.17]);
  });
});
