// Operadores de comparação
// > maior que
// < menor que
// >= maior ou igual a
// <= menor ou igual a
// == igual a
// === igual a e do mesmo tipo
// != diferente de
// !== diferente de e de outro tipo
// && e
// || ou
// ! não
// !! transforma o valor em booleano


// console.log(10 > 5); // true
// console.log(10 < 5); // false
// console.log(10 >= 10); // true
// console.log(10 <= 10); // true
// console.log(10 == 10); // true
// console.log(10 === 10); // true
// console.log(10 != 10); // false
// console.log(10 !== 10); // false
// console.log(10 !== '10'); // true
// console.log(10 === '10'); // false
// console.log(10 == '10'); // true
// console.log(10 > 5 && 10 < 20); // true
// console.log(10 > 5 && 10 > 20); // false
// console.log(10 > 5 || 10 > 20); // true
// console.log(10 < 5 || 10 > 20); // false
// console.log(!true); // false
// console.log(!false); // true
// console.log(!!true); // true
// console.log(!!false); // false
// console.log(!!10); // true
// console.log(!!0); // false
// console.log(!!''); // false
// console.log(!!' '); // true
// console.log(!!null); // false
// console.log(!!undefined); // false
// console.log(!!NaN); // false
// console.log(!!{}); // true
// console.log(!![]); // true
// console.log(!!function() {}); // true
// console.log(!!1); // true
// console.log(!!-1); // true
// console.log(!!'a'); // true
// console.log(!!'0'); // true


let compare = 10>=10;
console.log(compare); // true

compare = 10!='10';
console.log(compare); // false

compare = 10!=='10';
console.log(compare); // true