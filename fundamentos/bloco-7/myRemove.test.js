const myRemove = require('./myRemove.js');

describe('tests for the function myRemove', () => {
  //return [1,2,3,4]
  it('param myRemove([1, 2, 3, 4], 3) retorna [1,2,3,4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  //do not return array
  it('param myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
});
