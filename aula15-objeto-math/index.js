// Arredondamento de números
// Math.floor() - arredonda para baixo
// Math.ceil() - arredonda para cima
// Math.round() - arredonda para o número mais próximo
// Math.trunc() - remove a parte fracionária
// Math.max() - retorna o maior número de uma sequência
// Math.min() - retorna o menor número de uma sequência
// Math.random() - retorna um número aleatório entre 0 e 1

let num1 = 9.54578;
console.log(Math.floor(num1)); // 9
console.log(Math.ceil(num1)); // 10
console.log(Math.round(num1)); // 10
console.log(Math.trunc(num1)); // 9
console.log(num1.toFixed(2)); // 9.55
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 10
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 1
console.log(Math.random()); // número aleatório entre 0 e 1

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // número aleatório entre 5 e 10

console.log(aleatorio); // número aleatório entre 5 e 10

// Exemplo de uso do Math.random() para gerar um número aleatório entre 1 e 100
let numAleatorio = Math.round(Math.random() * 100);
console.log(numAleatorio); // número aleatório entre 1 e 100

console.log(Math.PI); // 3.141592653589793 número pi
console.log(Math.pow(2, 10)); // 1024 = 2^10 - potência
console.log(2 ** 10); // 1024 = 2^10 - potência

// Cálculo da raiz quadrada
let num2 = 9;
console.log(Math.sqrt(num2)); // 3
console.log(num2 ** 0.5); // 9^0.5 = 3

// Em javascript podemos dividir um número por zero, o resultado será Infinity
console.log(100 / 0); // Infinity