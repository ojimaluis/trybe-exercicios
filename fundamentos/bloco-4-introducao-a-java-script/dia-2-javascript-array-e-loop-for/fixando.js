let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}

for (let index = 0; index < numbers.length; index++) {
  soma += numbers[index];
}

console.log(soma);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index++) {
  soma += numbers[index];
}
let avarage = soma / numbers.length;
console.log(avarage);

if (avarage < 20) {
    console.log('valor menor que 20');
} else {
    console.log('valor maior que 20');
}

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// o valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso atribuíssemos o valor 101 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);

let numerosPrimos = 0
for (let index = 2; index > 50; index++) {
  if (index )
}