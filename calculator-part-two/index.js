const Calculate = {
  average(arr) {
    const sum = Calculate.sum(arr);
    return sum/arr.length;
  },

  tiny(arr) {
    if(arr.length === 0) {
      throw Error;
    }

    var max = 999999;
    for(i = 0; i < arr.length; i++) {
      if(arr[i] < max) {
        max = arr[i];
      }
    }
    return max;
  },

  large(arr) {
    if(arr.length === 0) {
      throw Error;
    }

    var max = 0;
    for(i = 0; i < arr.length; i++) {
      if(arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  },

  exponential(base, exponent) {
    if(exponent === 0) {
      return 1;
    }
    result = base;
    for(i = 0; i < exponent - 1; i++) {
      result *= base;
    }
    return result;
  },

  sum(inputArray) {
    if(inputArray.length === 0){
      return 0
    }
    return inputArray.reduce((sum, value) => {
      return sum + value;
    })
  },

  factorial(inputNumber) {
    if (inputNumber === 0) {
      return 1;
    }
    for (let iteration = inputNumber - 1; iteration >= 1; iteration--) {
      inputNumber = inputNumber * iteration;
    }

    return inputNumber;
  },

  add(inputOne, inputTwo) {
    return inputOne + inputTwo;
  },

  subtract(inputOne, inputTwo) {
    return inputOne - inputTwo;
  },

  multiply(inputOne, inputTwo) {
    return inputOne * inputTwo;
  },

  divide(dividend, divisor) {
    if(divisor === 0) {
      throw new Error('the quotient of a number and 0 is undefined');
    } else {
      return dividend / divisor;
    }
  },

  absoluteValue(input) {
    if(input < 0) {
      return -input;
    } else {
      return input;
    }
  }
}





module.exports = Calculate;
