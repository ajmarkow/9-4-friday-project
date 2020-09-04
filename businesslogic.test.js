import Calculator from "./src/js/businesslogic";

describe("person", () => {
  const testperson = new earthuser(1, "male");
  test("user object stores earthage, sex properties, and planetary age array to hold ages. ", () => {
    expect(testperson.earthage).toEqual(1);
    expect(testperson.sex).toEqual("male");
    expect(testperson.planetaryages).toEqual([]);
  });
});
