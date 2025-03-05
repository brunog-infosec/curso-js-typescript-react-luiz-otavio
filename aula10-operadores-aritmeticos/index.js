/*
 Operadores Aritméticos
 + Adição / Concatenação
 - Subtração
 / Divisão
 * Multiplicação
 % Resto da divisão

 Precendência de operadores aritméticos
    1º - ()
    2º - **
    3º - * / %  --> da esquerda para direita se tiverem a mesma precedência
    4º - + -

*/

// Adição
const num1 = 10;
const num2 = 5;

console.log('Soma', num1 + num2); // 15

// Exponenciação
const num3 = 10;
const num4 = 2;
console.log('Exponenciação', num3 ** num4); // 100

// concatenação
const num5 = 10;
const num6 = '5';
console.log('Concatenação', num5 + num6); // 105

// Resto da Divisão 
const num7 = 10;
const num8 = 3;
console.log('Resto da divisão', num7 % num8); // 1

// Operador de incremento
let contador = 1;
contador++; // contador = contador + 1
console.log('Incremento', contador); // 2
++contador; // contador = contador + 1
console.log('Incremento', contador); // 3

// O pós incremento retorna o valor antes de incrementar
// O pré incremento retorna o valor depois de incrementar

//Operador de decremento
let contador2 = 10;
contador2--; // contador2 = contador2 - 1
console.log('Decremento', contador2); // 9
--contador2; // contador2 = contador2 - 1
console.log('Decremento', contador2); // 8

contador = 0;
const passo = 2;
contador += passo; // contador = contador + 2
console.log('Adição', contador); // 2
contador += passo; // contador = contador + 2
console.log('Adição', contador); // 4

// NaN - Not a Number
const num9 = 10;
const num10 = 'a';
console.log('Multiplicação de Número com String:', num9 * num10); // NaN

// Em alguns casos o JavaScript consegue converter a string para número
const num11 = 10;
const num12 = '5';
console.log('Multiplicação de Número com String:', num11 * num12); // 50

// Converter string para número
const num13 = 10;
const num14 = parseInt('5');
console.log('Multiplicação de Número com String:', num13 * num14); // 50

// Converter string para número
const num15 = 10;
const num16 = parseFloat('5.2');
console.log('Multiplicação de Número com String:', num15 * num16); // 52

// Converter string para número
const num17 = 10;
const num18 = Number('5.2');
console.log('Multiplicação de Número com String:', num17 * num18); // 52

// parseInt - Converte para inteiro
// parseFloat - Converte para decimal
// Number - Converte para número