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
  if (parseInt(number) === number) {
    return true;
  } else {
    throw Error('Not an integer')
  }
}

module.exports = {
  isNumber: isNumber,
  isInteger: isInteger
}
