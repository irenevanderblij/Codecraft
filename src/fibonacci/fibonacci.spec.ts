import { calculateValue } from './fibonacci';

const binet = require('@stdlib/math-base-special-binet');

describe('Fibonacci', () => {
  Array.from(Array(50).keys()).forEach((number) => {
    it(`of ${number} should be ${Math.round(binet(number))}`, () => {
      expect(calculateValue(number)).toEqual(Math.round(binet(number)));
    });
  });
});
