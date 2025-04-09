// const multiplica = require("./mod"); // importação

// console.log(multiplica(4, 3)); // 12

const Cachorro = require("./a/b/c/mod2");

const cachorroBob = new Cachorro("Bob");
cachorroBob.latir();

//Importando a classe Gato dentro de mod3
//Lembrando que require pode ser chamando em qualquer lugar do programa
const Gato = require("./outros/mod3");

const gatoMax = new Gato("Max");
gatoMax.miar();

// Pelo node também podemos verificar o caminho absoluto dos diretórios e das pastas

console.log(__filename);
console.log(__dirname);

//Podemos fazer pelo modulo path também
const path = require("path");
console.log(__dirname);
console.log(path.resolve(__dirname, "..", "..", "arquivos", "imagens"));
