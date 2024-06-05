const slice = require("./../index.js");
const Restriction = require("hacktiv8-restriction");

describe("slice test case", () => {
  it("should return a function (0)", () => {
    expect(slice).toBeInstanceOf(Function);
  });

  it(`should slice from index 2 until end when only sent 2 paramter with data ['ant', 'bison', 'camel', 'duck', 'elephant'] (15)`, () => {
    const result = slice(["ant", "bison", "camel", "duck", "elephant"], 2);

    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual(["camel", "duck", "elephant"]);
  });

  it(`should slice from selected index until end index with data ['ant', 'bison', 'camel', 'duck] (40)`, () => {
    const result = slice(["ant", "bison", "camel", "duck", "elephant"], 2, 4);

    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual(["camel", "duck"]);

    const result2 = slice(["ant", "bison", "camel", "duck", "elephant"], 1, 5);

    expect(result2).toBeInstanceOf(Array);
    expect(result2).toEqual(["bison", "camel", "duck", "elephant"]);

    const result3 = slice(["ant", "bison", "camel", "duck", "elephant"], 3, 4);

    expect(result3).toBeInstanceOf(Array);
    expect(result3).toEqual(["duck"]);
  });

  it(`should slice from 0 to end of data when only send one parameter with data ['ant', 'bison', 'camel', 'duck', 'elephant'] (15)`, () => {
    const result = slice(["ant", "bison", "camel", "duck", "elephant"]);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual(["ant", "bison", "camel", "duck", "elephant"]);
  });

  it(`should return empty array when start index is greater than length of the data (10)`, () => {
    const result = slice(["ant", "bison", "camel", "duck", "elephant"], 20);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([]);
  });

  it(`should return invalid data when parameter is empty (5)`, () => {
    const result = slice();
    expect(result).toEqual("Invalid data");
  });

  test("check restriction (-100)", async () => {
    const checkRestriction = new Restriction("../index.js");
    checkRestriction.rules = ["slice"];
    const result = await checkRestriction.readCode();
    expect(result).toBe(null);
  });
});
