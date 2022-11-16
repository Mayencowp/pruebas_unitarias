//TEST

const isUpperCase = require('../utils/esmayuscula');

describe('mayuscula', () => {
    test.each`
    firstValue     | expectedResult    
    ${'HELLO'}        | ${true}   
    ${'hola'}        | ${false}
    ${'JUANLUIS'}    | ${true}
    ${'juanluis'}    | ${false}
    ${'QA'}          | ${true}
    ${'qa'}          | ${false}
     

    `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(isUpperCase(firstValue)).toBe(expectedResult);
    });
  });
