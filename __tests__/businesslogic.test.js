describe("person", () => {
  beforeEach(() => {
    let testperson = new person(1, "male");
  });

  test("user object stores earthage, sex properties, and planetary age array to hold ages. ", () => {
    expect(testperson.earthage).toEqual(1);
    expect(testperson.sex).toEqual("male");
    expect(testperson.planetaryages).toEqual([]);
  });
});
