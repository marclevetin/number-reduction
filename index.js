// const userEnteredNumber = parseFloat(process.argv[2]);
const userEnteredNumber = process.argv[2] || 'exit';
const showWork = process.argv[3];
const math = require('./mathFunctions');
const BigNumber = require('big-number');

// algorithm
// if number is even, divide by two
// if number is not even, then run through "add one" and "subtract one"
// count number of steps
// record the starting number in array
// choose the number with the fewest steps to 1
// execute operation
// recursively run function with new number
// stop recursion if number is equal to 1
// return number of steps needed

const confirmed = {};
// disabled validation for a moment
let numberOfSteps = reduceNumber(userEnteredNumber, 0);
console.log('number of steps: ' + numberOfSteps)

if (showWork) {
  console.log('here are the calculations to get to this number')
  console.log(confirmed)
}

function reduceNumber(number, iterator) {
  debugger;
  // exit if the user forgets to add a value.
  // this prevents an error at the first use of .val()
  if (number === 'exit') {
    console.log('please enter a number')
    return
    //end state
  } else if (BigNumber(number).val() === '1') {
    // if (number === 1) {
    confirmed[userEnteredNumber] = iterator
    return iterator;
  // even
  } else if (BigNumber(number).mod(2).val() === '0') {
  // } else if (number % 2 === 0) {
    iterator += 1;
    let newNumber = math.divideByTwo(number);
    return reduceNumber(newNumber, iterator);

  // odd
  } else if (BigNumber(number).mod(2).val() === '1') {
  // } else if (number % 2 === 1) {
    // this section finds the most beneficial "next step" by running the entire sequence
    // even though it runs all the way to 1, it only returns a single number

    let addNumber = math.addOne(number);
    if (!confirmed[addNumber]) {
      let addSteps = reduceNumber(addNumber, 1);
      confirmed[addNumber] = addSteps - 1
    }

    let subtractNumber = math.subtractOne(number);
    if (!confirmed[subtractNumber]) {
      let subtractSteps = reduceNumber(subtractNumber, 1);
      confirmed[subtractNumber] = subtractSteps - 1
    }

    // use the next step with fewer steps to 1, add 1 to iterator (for the next step)
    if (confirmed[addNumber] > confirmed[subtractNumber]) {
      return reduceNumber(subtractNumber, iterator + 1)
    } else {
      return reduceNumber(addNumber, iterator + 1)
    }

  // something went wrong
  // can't throw an error, lest Mocha have a heart attack
  } else {
    console.log('something went wrong')
  }
}


module.exports = {
  reduceNumber: reduceNumber
}
