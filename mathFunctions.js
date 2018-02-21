const BigNumber = require('big-number');

const divideByTwo = function (number) {
  return BigNumber(number).divide(2).val();
  // return number / 2;
}

const addOne = function (number) {
  return BigNumber(number).add(1).val();
  // return number + 1;
}

const subtractOne = function (number) {
  return BigNumber(number).subtract(1).val();
  // return number - 1;
}

module.exports = {
  divideByTwo: divideByTwo,
  addOne: addOne,
  subtractOne: subtractOne
}
