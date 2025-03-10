const nomes = ["João", "Maria", "Carlos", "José", "Renato"];

// adiciona e remove do inicio
nomes.unshift("Pedro");
console.log(nomes, "Adicionou Pedro no inicio");
nomes.shift();
console.log(nomes, "Removeu Pedro do inicio");

// Adiciona e remove do fim
nomes.push("Gustavo");
console.log(nomes, "Adicionou Gustavo ao final");
nomes.pop();
console.log(nomes, "Removeu Gustavo do final");

// Fatiando um array
const novo = nomes.slice(1, 3); // Indice inicio / Indice depois do elemento
console.log(novo, "Pegou o indice 1 ao 2");

const nome = "Bruno Garcia Ignácio";
console.log(nome);
// Separando a string pelo espaço e colocando no array
const nomeSobrenome = nome.split(" ");
console.log(nomeSobrenome, "Separando com split por espaço");

// Transformando o array em String - unindo com join()
const carros = ["Gol", "Palio", "Celta", "Uno"];
const carro = carros.join(' ');

console.log(carros, carro);
