//TEST

const sum = require('../utils/suma');

describe('calculator', () => {
    test.each`
      firstValue | secondValue | expectedResult    
      ${3}       | ${1}        | ${4}
      ${-4}      | ${1}        | ${-3}
      ${8}       | ${-5}       | ${3}
      ${7}       | ${15}       | ${22}
      ${-4}      | ${-1}       | ${-5}

    `('$firstValue + $secondValue should return $expectedResult', ({firstValue, secondValue, expectedResult}) => {
      expect(sum(firstValue, secondValue)).toBe(expectedResult);
    });
  });