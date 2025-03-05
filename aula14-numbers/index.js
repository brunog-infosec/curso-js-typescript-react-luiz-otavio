// método toSting() converte um número em string

let num1 = 1;
let num2 = 2.5;
console.log(num1.toString()); // 1

console.log(num1.toString() + num2); // 12.5
console.log(typeof num1); // number - não é alterado seu tipo

// transformando o número em binário
let num3 = 10;
console.log(num3.toString(2)); // 1010



// Definindo a quantidade de casas decimais
console.log(num4.toFixed(2)); // 9.55
console.log(num4.toFixed(3)); // 9.546

// Verificando se um número é inteiro
console.log(Number.isInteger(num1)); // true
console.log(Number.isInteger(num2)); // false

// Verificando se o resultado é NaN
let temp = num1 * 'Olá';
console.log(Number.isNaN(temp)); // true

//Padrão de número em javascript segue o padrão IEEE 754-2008
// Problemas com números flutuantes, se somarmos estes números vai ter uma imprecisão devido a forma como o javascript trabalha com números flutuantes
num1 = 0.7;
num2 = 0.1;

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
console.log(num1); // 1.0000000000000002
console.log(num1.toFixed(2)); // 1.00
console.log(Number.isInteger(num1)); // false
num1 = parseFloat(num1.toFixed(2)); // Maneira de corrigr o problema
console.log(Number.isInteger(num1)); // true

//Outra maneira de corrigir o problema de imprecisão
num1 = 0.7;
num2 = 0.1;

num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;

console.log(num1); // 1
console.log(Number.isInteger(num1)); // true
