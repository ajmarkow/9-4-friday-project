import Calculator from "./src/js/businesslogic";

import earthuser from "./src/js/businesslogic";
import mercuryAge from "./src/js/businesslogic";

describe("person", () => {
  test("user object stores earthAge.", () => {
    const testperson = new earthuser();
    testperson.earthAge = 1;
    expect(testperson.earthAge).toEqual(1);
  });

  test("user object stores sex property. ", () => {
    const testperson = new earthuser();
    testperson.sex = "male";
    expect(testperson.sex).toEqual("male");
  });

  test("user object stores an array of numbers in planetary age array. ", () => {
    const testperson = new earthuser();
    testperson.planetaryages = [1, 2, 3, 4];
    expect(testperson.planetaryages).toEqual([1, 2, 3, 4]);
  });

  test("user object planets array stores list of planets. ", () => {
    const testperson = new earthuser();
    testperson.planets = ["Mercury", "Venus", "Mars", "Jupiter"];
    expect(testperson.planets).toEqual(["Mercury", "Venus", "Mars", "Jupiter"]);
  });

  test("user object life expectancy array stores list of life expectancies. ", () => {
    const testperson = new earthuser();
    testperson.sex = "female";
    testperson.lifeExpectancy = testperson.getLifeExpectancy();
    expect(testperson.lifeExpectancy).toEqual([]);
  });

  test("user object stores lifeExpectancy property. ", () => {
    const testperson = new earthuser();
    testperson.lifeExpectancy = 70;

    expect(testperson.lifeExpectancy).toEqual(70);
  });

  test("planetaryAge function returns earthAge  divided by planetary coefficient for Mercury, Venus, Mars, and Jupiter ", () => {
    const testperson = new earthuser();
    testperson.earthAge = 2;
    testperson.planetaryages = testperson.planetaryConvert();
    expect(testperson.planetaryages).toEqual([0.48, 1.24, 3.76, 23.72]);
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
});
