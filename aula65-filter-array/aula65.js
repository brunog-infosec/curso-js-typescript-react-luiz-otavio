//Filter sempre retornar um array, com a mesma quantidade de elemento ou menos
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// O Filter faz a iteração dos elementos automaticamente
// Retorne os números maiores que 10
const numerosFiltrados = numeros.filter((numero) => numero > 10);
console.log(numerosFiltrados);

//Padrão do Filter(value, index, array)
// value da iteração atual, indice da iteração atual, e array completo.
const pessoas = [
  { nome: "Ana", idade: 23 },
  { nome: "Carlos", idade: 45 },
  { nome: "Maria", idade: 31 },
  { nome: "Pedro", idade: 28 },
  { nome: "João", idade: 54 },
  { nome: "Luiza", idade: 34 },
  { nome: "Fernanda", idade: 25 },
  { nome: "Rafael", idade: 37 },
  { nome: "Juliana", idade: 52 },
  { nome: "Ricardo", idade: 29 },
];

// Retorne as pessoas com nomes maiores ou igual de 5 letras
const nomesMaiorCincoLetras = pessoas.filter((obj) => obj.nome.length >= 5);
console.log(nomesMaiorCincoLetras);

// Retorne as pessoas com idade superior a 50 anos
const nomesMaiorCinquentaAnos = pessoas.filter((obj) => obj.idade > 50);
console.log(nomesMaiorCinquentaAnos);

// Retorne as pessoas cujo nome termina com a letra 'a'
const nomesTerminaComLetraA = pessoas.filter((obj) =>
  obj.nome.toLowerCase().endsWith("a")
);
console.log(nomesTerminaComLetraA);
