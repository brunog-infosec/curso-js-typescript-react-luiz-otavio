const pessoas = [
  { id: 3, nome: "Luiz" },
  { id: 2, nome: "Bruno" },
  { id: 1, nome: "Maria" },
];

const novasPessoas = {};
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas[id] = { ...pessoa };
}

console.log(novasPessoas);

//Porém retornará uma chave com string, e a chave ordenada em forma crescente
//Para resolver isso vamos utilizar o Objeto Map

const novasPessoasMap = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoasMap.set(id, { ...pessoa });
}

console.log(novasPessoasMap.get(1)); //Pega a chave 1
console.log(novasPessoasMap.get(2)); //Pega a chave 2
console.log(novasPessoasMap.get(3)); //Pega a chave 3

//Podemos iterar sobre o map também, e ele retornará um array

for (const pessoa of novasPessoasMap) {
  console.log(pessoa);
}

//Podemos também fazer a desestruturação do Map, e depois mostrar cada item
for (const [chave, { id, nome }] of novasPessoasMap) {
  console.log(`Chave: ${chave} id: ${id} nome: ${nome}`);
}

//também podemos eliminar chaves
novasPessoasMap.delete(2) //Deleta a chave 2
console.log(novasPessoasMapf)