//TEST

const palindromo = require('../utils/palindromo');

describe('palindromo', () => {
    test.each`
      firstValue    | expectedResult    
      ${hola}       | ${aloh}
      ${soluciones} | ${senoiculos}
      ${juan}       | ${nauj}
      ${otto}       | ${otto}
      ${oso}        | ${oso}
      ${asa}        | ${asa}

    `('$firstValue should return $expectedResult', ({firstValue}) => {
      expect(palindromo(firstValue)).toBe(expectedResult);
    });
  });