const searchEmployee = require('./bonus');

it('verifica se a funcao existe', () => {
  expect(typeof searchEmployee).toBe('function');
});
