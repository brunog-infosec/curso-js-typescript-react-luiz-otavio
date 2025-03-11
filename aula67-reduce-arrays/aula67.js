/** Reduce:
 * Reduz o array em um único elemento
 */

// Some todos números (reduce)
// Retorne um array com os pares (filter)
// Retorne o array com o dobro dos valores (map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Total dos números
const total = numeros.reduce(function (acumulador, valor) {
  acumulador += valor;
  return acumulador;
}, 0);
console.log("Total com Reduce:", total);

// Array com os pares usando filter
const pares = numeros.filter((numero) => numero % 2 === 0);
console.log("\npares com filter:", pares);

// Array com pares usando reduce
const pares2 = numeros.reduce(function (acumulador, valor) {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);
console.log("\npares com reduce:", pares2);

// Array com o dobro usando map
const dobro = numeros.map((numero) => numero * 2);
console.log("\ndobro com map:", dobro);

// Array com dobro usando reduce
const dobro2 = numeros.reduce(function (acumulador, valor) {
  acumulador.push(valor * 2);
  return acumulador;
}, []);
console.log("\ndobro com reduce:", dobro2);

const pessoas = [
  { nome: "Ana", idade: 23 },
  { nome: "Carlos", idade: 45 },
  { nome: "Maria", idade: 31 },
  { nome: "Pedro", idade: 28 },
  { nome: "João", idade: 54 },
  { nome: "Luiza", idade: 34 },
  { nome: "Fernanda", idade: 25 },
  { nome: "Rafael", idade: 37 },
  { nome: "Juliana", idade: 54 },
  { nome: "Ricardo", idade: 29 },
];

//Retorne a pessoa mais velha

const maisVelha = pessoas.reduce((acumulador, obj) => {
  if (acumulador.idade > obj.idade) return acumulador;
  return obj;
});

console.log(maisVelha);

