// Trocar os valores das variáveis para que a saída seja:

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// let varTemp = varA;
// varA = varB;
// varB = varC;
// varC = varTemp;

console.log(varA, varB, varC); // B C A

// Uma maneira mais simples de fazer isso é utilizando o destructuring assignment do ES6:
[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC); // B C A