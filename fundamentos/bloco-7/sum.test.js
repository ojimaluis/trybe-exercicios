const sum = require('./sum.js');

describe('tests for the function sum', () => {
  //return 9
    test('number 4 and 5, return 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  //return 0
  test('number 0 and 0, return 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  //return error
  test('error message', () => {
    expect(() => sum(4, '5').toThrow(`${error.message}`));
  });
});