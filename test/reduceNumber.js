const expect = require("chai").expect;
const reduceNumber = require('../index.js').reduceNumber;

describe("Reduce Number", function() {
  it("entering a 1 returns 0", function() {
    expect(reduceNumber(1, 0)).to.equal(0);
  });

  it("entering a 2 returns 1", function() {
    expect(reduceNumber(2, 0)).to.equal(1);
  });

  it("entering a 3 returns 2", function() {
    expect(reduceNumber(3, 0)).to.equal(2);
  });

  it("entering a 4 returns 2", function() {
    expect(reduceNumber(4, 0)).to.equal(2);
  });

  it("entering a 5 returns 3", function() {
    expect(reduceNumber(5, 0)).to.equal(3);
  });

  it("entering a 6 returns 3", function() {
    expect(reduceNumber(6, 0)).to.equal(3);
  });

  it("entering a 7 returns 4", function() {
    expect(reduceNumber(7, 0)).to.equal(4);
  });

  it("entering a 8 returns 3", function() {
    expect(reduceNumber(8, 0)).to.equal(3);
  });

  it("entering a 9 returns 4", function() {
    expect(reduceNumber(9, 0)).to.equal(4);
  });

  it("entering a 10 returns 4", function() {
    expect(reduceNumber(10, 0)).to.equal(4);
  });

  it("entering a 19 returns 6", function() {
    expect(reduceNumber(19, 0)).to.equal(6);
  });

  it("entering a 203 returns 11", function() {
    expect(reduceNumber(203, 0)).to.equal(11);
  });

  it("entering a 987233 returns 25", function() {
    expect(reduceNumber(987233, 0)).to.equal(25);
  });

  // need to impliment a bignumber library to get this to pass
  // it("entering a 9482379823740923741113 returns 92", function() {
  //   expect(reduceNumber(9482379823740923741113, 0)).to.equal(92);
  // });
});
