const userEnteredNumber = parseFloat(process.argv[2]);
const math = require('./mathFunctions');
const validate = require('./validations');

// validates that the entry is a number and integer
const validatedNumber = (validate.isNumber(userEnteredNumber) && validate.isInteger(userEnteredNumber)) ? userEnteredNumber : 'Not an integer';

// if number is even, divide by two
// if number is not even, then run through "add one" and "subtract one"
// count number of steps
// record the starting number in array
// choose the number with the fewest steps to 1
// execute operation
// recursively run function with new number
// stop recursion if nunmber is equal to 1
// return number of steps needed

let numberOfSteps = 0;
reduceNumber(validatedNumber);
console.log('number of steps:' + numberOfSteps)

function reduceNumber(number) {
  if (number === 1) {
    return numberOfSteps;
  } else {
    numberOfSteps = numberOfSteps + 1;
    const newNumber = math.divideByTwo(number);
    reduceNumber(newNumber);
  }
}

module.exports = {
  reduceNumber: reduceNumber
}
