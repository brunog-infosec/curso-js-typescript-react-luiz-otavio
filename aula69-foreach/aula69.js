// foreach somente disponivel em arrays
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Iteração com For of
for (let numero of numeros) {
  console.log(numero);
}

//usando foreach
numeros.forEach((value) => console.log(value));

//Usando forEach para cálculos
let total = 0;
numeros.forEach((value) => total += value);
console.log(total)