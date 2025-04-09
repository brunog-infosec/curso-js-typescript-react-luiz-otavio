const mod1 = require("./mod1");
// import mod1 from "./mod1"; //forma atual

//Acessando uma função do modulo importado
console.log(mod1.falaNome());

//Importando somente a funçao do modulo
// const falaNome = require('./mod1').falaNome;

//Importando por destructuring
const { nome, sobrenome, falaNome } = require("./mod1");

console.log(nome, sobrenome);
console.log(falaNome());

const Pessoa = require("./mod1").Pessoa;

const p1 = new Pessoa("Carlos");
console.log(p1);

//Módulos Nativos do node não precisa indicar o caminho
// const path = require('path');

//Por exemplo importando o axios instalado com npm i axios
const axios = require('axios');

//fazendo a requisão com axios depois de importado
axios("https://pokeapi.co/api/v2/pokemon?limit=10")
  .then((response) => console.log(response.data))
  .catch((erro) => console.log(erro));
