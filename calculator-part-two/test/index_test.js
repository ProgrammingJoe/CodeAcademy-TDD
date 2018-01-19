const assert = require('assert');
const Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.average', () => {
    it('returns the average of an array', () => {
      const input = [3, 6, 9];
      const expected = 6;

      const result = Calculate.average(input);

      assert.equal(result, expected);
    });
  });

  describe('.min', () => {
    it('returns the minimum in an array', () => {
      const input = [3, 10, 5];
      const expected = 3;

      const result = Calculate.tiny(input);

      assert.equal(result, expected);
    });

    it('throws an Errow when the Array is empty', () => {
      const input = [];

      const result = () => Calculate.tiny(input);

      assert.throws(result);
    })
  });

  describe('.large', () => {
    it('returns the maximum number in an array', () => {
      const input = [3, 10, 5];
      const expected = 10;

      const result = Calculate.large(input);

      assert.equal(result, expected);
    });

    it('throws an Errow when the Array is empty', () => {
      const input = [];

      const result = () => Calculate.large(input);

      assert.throws(result);
    })
  });

  describe('.exponential', () => {
    it('returns the result of a base raised to a power', () => {
      const base = 5;
      const exponent = 2;
      const expected = 25;

      const result = Calculate.exponential(5, 2);

      assert.equal(result, expected);
    });

    it('returns 1 when the exponent is 0', () => {
      const base = 5;
      const exponent = 0;
      const expected = 1;

      const result = Calculate.exponential(5, 0);

      assert.equal(result, expected);
    });
  });

  describe('.factorial', () => {
    it('returns the factorial of a number', () => {
      const inputNumber = 5;
      const expected = 120;

      const result = Calculate.factorial(inputNumber);

      assert.equal(result, expected);
    })

    it('returns the factorial of a number', () => {
      const inputNumber = 3;
      const expected = 6;

      const result = Calculate.factorial(inputNumber);

      assert.equal(result, expected);
    })

    it('returns 1 when you pass in 0', () => {
      const inputNumber = 0;
      const expected = 1;

      const result = Calculate.factorial(inputNumber);

      assert.equal(result, expected);
    })
  })



  describe('.sum',() => {
    it('returns the sum of an array of numbers', () => {
      const expectedResult = 6;
      const inputArray = [1,2,3]

      const result = Calculate.sum(inputArray)

      assert.equal(result, expectedResult);
    });

    it('returns the sum of a four item list', ()=>{
      const expectedResult = 22;
      const inputArray = [4,6,5,7];

      const result = Calculate.sum(inputArray);

      assert.equal(result, expectedResult)

    });

    it('returns the sum of a four item list', ()=>{
       const expectedResult = 0;
       const inputArray = [];
       const result = Calculate.sum(inputArray);
       assert.equal(result, expectedResult)
    });
  });



  describe('.add', () => {
    it('returns the value of two numbers added together', () => {
      const inputOne = 3;
      const inputTwo = 2;
      const expected = 5;

      const result = Calculate.add(inputOne, inputTwo);

      assert.equal(result, expected);
    })
  })



  describe('.subtract', () => {
    it('returns the difference of the first number minus the second number', () => {
      const inputOne = 10;
      const inputTwo = 4;
      const expected = 6;

      const result = Calculate.subtract(inputOne, inputTwo);

      assert.equal(result, expected);
    })

  })



  describe('.multiply', () => {
    it('returns the product of two numbers', () => {
      const inputOne = 7;
      const inputTwo = 8;
      const expected = 56;

      const result = Calculate.multiply(inputOne, inputTwo);

      assert.equal(result, expected);
    })
  })



  describe('.divide', () => {
    it('returns the first number divided by the second number', () => {
      const dividend = 10;
      const divisor = 5;
      const expected = 2;

      const result = Calculate.divide(dividend, divisor);

      assert.equal(result, expected);
    })

    it("returns an exception when the divisor is 0", () => {
      const dividend = 8;
      const divisor = 0;
      expected = Error;

      const exercise = () => Calculate.divide(dividend, divisor);

      assert.throws(exercise, expected);
    })
  })



  describe('.absoluteValue', () => {
    it('returns the absolute value of the input number', () => {
      const inputOne = -5;
      const expected = 5;

      const result = Calculate.absoluteValue(inputOne);

      assert.equal(result, expected);
    })
  })
});
