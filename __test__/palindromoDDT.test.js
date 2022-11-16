//TEST

const palindromo = require('../utils/palindromo.js');

describe('palindromo', () => {
    test.each`
      string          | expectedResult   
      ${'hola'}       | ${'aloh'}
      ${'soluciones'} | ${'senoiculos'}

    `('$string should return $expectedResult', ({string, expectedResult}) => {
      expect(palindromo(string)).toBe(expectedResult);
    });
  });