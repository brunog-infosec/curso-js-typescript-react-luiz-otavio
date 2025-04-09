//Exportação diretamente de uma função

// module.exports = function (x, y) {
//   return x * y;
// };

//exportando diretamente uma classe
module.exports = class Cachorro {
  constructor(nome) {
    this.nome = nome;
  }

  latir() {
    console.log(`${this.nome} está latindo`);
  }
}
