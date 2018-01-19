const assert = require('assert');
const Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.add', () => {
    it('returns the value of two numbers added together', () => {
      const firstnumber = 3;
      const secondnumber = 5;
      const expected = 8;

      const actual = Calculate.add(firstnumber, secondnumber);

      assert.equal(actual, expected);
    });
  });

  describe('.subtract', () => {
    it('returns the difference of the first number minus the second number', () => {
      const firstnumber = 5;
      const secondnumber = 8;
      const expected = 3;

      const actual = Calculate.subtract(firstnumber, secondnumber);

      assert.equal(actual, expected);
    });
  });

  describe('.multiply', () => {
    it('returns the product of two numbers', () => {
      const firstnumber = 2;
      const secondnumber = 5;
      const expected = 10;

      const actual = Calculate.multiply(firstnumber, secondnumber);

      assert.equal(actual, expected);
    });
  });

  describe('.divide', () => {
    it('returns the first number divided by the second number', () => {
      const firstnumber = 10;
      const secondnumber = 5;
      const expected = 2;

      const actual = Calculate.divide(firstnumber, secondnumber);

      assert.equal(actual, expected);
    });


    it('throws an error when the divisor is 0', () => {
      const firstnumber = 10;
      const secondnumber = 0;

      assert.throws(
        () => {
          Calculate.divide(firstnumber, secondnumber);
        }
      );
    });
  });

  describe('.absoluteValue', () => {
    it('returns the absolute value of the input number', () => {
      const firstnumber = -5;
      const expected = 5;

      const actual = Calculate.absoluteValue(firstnumber);

      assert.equal(actual, expected);
    });
  });
});
