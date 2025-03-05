let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];

[a, b, c] = letras;

console.log(a, b, c);

//Outro exemplo - atribuição dos valores automaticamente a variaveis
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [primeiroNumero, segundoNumero, terceiroNumero] = numeros;

console.log(primeiroNumero, segundoNumero, terceiroNumero);

// usando o rest operator
const [um, dois, tres, ...resto] = numeros; // com o modo rest pegamos o restante do array

console.log(um, dois, tres, resto);

// pegando valores separados
const [primeiro, , ,quarto, ,sexto] = numeros;
console.log(primeiro,quarto,sexto);

// Complicando as coisas
//                 0       1       2
//               0 1 2   0 1 2   0 1 2
const array2 = [[1,2,3],[4,5,6],[7,8,9]];
const [,[,,seis]] = array2;
console.log(seis) // 6

//Desestruturação por arrays
const [lista1,lista2,lista3] = array2;
console.log(lista2[2]); // 6