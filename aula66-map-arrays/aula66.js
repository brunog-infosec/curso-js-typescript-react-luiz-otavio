// Mapa retorna os valores, porém altera os objetos dentro do array original
// Map sempre terá o mesmo tamanho do array original
// A cada iteração do map ele irá retornar o que você quiser com o código

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Dobre os números
const numerosDuplicados = numeros.map((numero) => {
  return numero * 2;
});
console.log(numerosDuplicados);

// Alterando um objeto
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

// Eleve todos nomes para Maíscula
// const nomesUpperCase = pessoas.map((obj) => obj.nome.toUpperCase());
// console.log(nomesUpperCase)

// Retorna apenas os nomes das pessoas
const nomes = pessoas.map((obj) => obj.nome);
console.log(nomes);

// Remove apenas a chave "nome" do objeto
const idades = pessoas.map((obj) => obj.idade);
// Outras formas de fazer
// const idades = pessoas.map((obj) => delete obj.nome);
// const idades = pessoas.map((obj) => ({idade: obj.idade}));
console.log(idades);

// Adicione uma ChaveId para cada objeto
const chaveId = pessoas.map((obj, index) => ({
  id: index,...obj}));

console.log(chaveId);

//Uma outra forma de adicionar o ID:
const chaveId2 = pessoas.map((obj, index) => {
  obj.id = index;
  return obj;
});
console.log(chaveId2);

// Uma forma de não alterar o objeto original
// Vamos criar uma nova variavel que receberá o objeto completo
const chaveId3 = pessoas.map((obj, index) => {
  const newObj = { ...obj };
  newObj.id = index;
  return newObj;
});

console.log(chaveId3);

console.log(pessoas)
