import Calculator from "./src/js/businesslogic";

import earthuser from "./src/js/businesslogic";
import mercuryAge from "./src/js/businesslogic";

describe("person", () => {
  test("user object stores earthage, sex properties, and planetary age array to hold ages. ", () => {
    const testperson = new earthuser();
    testperson.earthage = 1;
    testperson.sex = "male";
    testperson.planetaryages = [];
    expect(testperson.earthage).toEqual(1);
    expect(testperson.sex).toEqual("male");
    expect(testperson.planetaryages).toEqual([]);
  });

  test("mercuryAge function returns earthage *0.24 ", () => {
    const testperson = new earthuser();
    testperson.earthage = 1;
    expect(testperson.mercuryAge).toEqual(0.24);
  });
});
