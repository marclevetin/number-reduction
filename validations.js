const isNumber = function(number) {
  let result = false;

  // the number equal to, less than, greater than is to guard against NaN.
  // typeof is for everything else
  if (number === 0 || number < 0 || number > 0 && typeof number === 'number') {
    result = true
  }

  return result;
}

const isInteger = function(number) {
  return parseInt(number) === number
}

module.exports = {
  isNumber: isNumber,
  isInteger: isInteger
}
