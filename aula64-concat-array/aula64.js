//Concatenação de arrays
// Usando método concat

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = a1.concat(a2);

console.log(a3);

//Podemos adicionar arrays literais, e também string
const a4 = a1.concat(a2, [7, 8, 9], "Bruno");
console.log(a4);

//Utilizando o spread operator
const a5 = [...a1, ...a2];
console.log(a5);

// Com spread, adicionando string e arrays literais
const a6 = [...a1, "Bruno", ...a2, ...[7, 8, 9]];
console.log(a6);
