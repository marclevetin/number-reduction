const expect = require("chai").expect;
const mathFunctions = require('../mathFunctions.js');

describe("Math", function() {
  it("divideByTwo is a function", function() {
    expect(typeof mathFunctions.divideByTwo).to.equal("function");
  });

  it("addOne is a function", function() {
    expect(typeof mathFunctions.addOne).to.equal("function");
  });

  it("subtractOne is a function", function() {
    expect(typeof mathFunctions.subtractOne).to.equal("function");
  });

  it("divideByTwo returns the correct result", function() {
    expect(typeof mathFunctions.divideByTwo(4)).to.equal("number");
    expect(mathFunctions.divideByTwo(4)).to.equal(2);
    expect(mathFunctions.divideByTwo(-4)).to.equal(-2);
  });

  it("addOne returns the correct result", function() {
    expect(typeof mathFunctions.addOne(4)).to.equal("number");
    expect(mathFunctions.addOne(4)).to.equal(5);
    expect(mathFunctions.addOne(-4)).to.equal(-3);
  });

  it("subtractOne returns the correct result", function() {
    expect(typeof mathFunctions.addOne(4)).to.equal("number");
    expect(mathFunctions.subtractOne(4)).to.equal(3);
    expect(mathFunctions.subtractOne(-4)).to.equal(-5);
  });

});
