const expect = require("chai").expect;
const reduceNumber = require('../index.js').reduceNumber;

describe("Reduce Number", function() {
  it("entering a 1 returns 0", function() {
    expect(reduceNumber(1)).to.equal(0);
  });

  it("entering a 2 returns 1", function() {
    expect(reduceNumber(2)).to.equal(1);
  });

  it("entering a 4 returns 2", function() {
    expect(reduceNumber(4)).to.equal(2);
  });
});
