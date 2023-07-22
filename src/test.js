const { expect } = require("chai");
const { integerToRoman, OutOfRangeError } = require("./romanToInteger");

describe("integerToRoman", () => {
  it("converts 1 to I", () => {
    const result = integerToRoman(1);
    expect(result).to.equal("I");
  });

  it("converts 5 to V", () => {
    const result = integerToRoman(5);
    expect(result).to.equal("V");
  });

  it("converts 10 to X", () => {
    const result = integerToRoman(10);
    expect(result).to.equal("X");
  });

  it("converts 50 to L", () => {
    const result = integerToRoman(50);
    expect(result).to.equal("L");
  });

  it("converts 100 to C", () => {
    const result = integerToRoman(100);
    expect(result).to.equal("C");
  });

  it("converts 500 to D", () => {
    const result = integerToRoman(500);
    expect(result).to.equal("D");
  });

  it("converts 1000 to M", () => {
    const result = integerToRoman(1000);
    expect(result).to.equal("M");
  });

  it("converts 4 to IV", () => {
    const result = integerToRoman(4);
    expect(result).to.equal("IV");
  });

  it("converts 9 to IX", () => {
    const result = integerToRoman(9);
    expect(result).to.equal("IX");
  });

  it("converts 14 to XIV", () => {
    const result = integerToRoman(14);
    expect(result).to.equal("XIV");
  });

  it("converts 99 to XCIX", () => {
    const result = integerToRoman(99);
    expect(result).to.equal("XCIX");
  });

  it("converts 400 to CD", () => {
    const result = integerToRoman(400);
    expect(result).to.equal("CD");
  });

  it("converts 3999 to MMMCMXCIX", () => {
    const result = integerToRoman(3999);
    expect(result).to.equal("MMMCMXCIX");
  });

  it("returns empty string for negative integers", () => {
    expect(() => {
      integerToRoman(-1);
    }).to.throw(OutOfRangeError);
  });

  it("returns empty string for zero", () => {
    expect(() => {
      integerToRoman("");
    }).to.throw(OutOfRangeError);
  });

  it("throws OutOfRangeError for integers greater than 3999", () => {
    expect(() => {
      integerToRoman(4000);
    }).to.throw(OutOfRangeError);
  });
});
