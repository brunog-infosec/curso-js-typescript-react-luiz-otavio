// Retorne a soma do dobro de todos pares
// 1. Filtrar os pares
// 2. Dobrar os valores
// 3. Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros
  .filter((value) => value % 2 === 0) // Verifica os numeros pares
  .map((value) => value * 2) // pega cada valor e Dobra
  .reduce((ac, value) => ac + value); // Soma os valores no acumulador e retorna o total

console.log(total);
