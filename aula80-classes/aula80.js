class Pessoa {
  //constructor dos atributos e propriedades do objeto
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  //métodos
  falar() {
    console.log(`${this.nome} está falando`);
  }
}

/**
 * Todas objetos instânciados já vão usar o método criado na Classe pai,
 * sendo que não é ncessário mais criar prototype
 */

const p1 = new Pessoa("Bruno", "Garcia");
console.log("Nome:", p1.nome);
console.log("Sobrenome:", p1.sobrenome);
p1.falar();

/**
 * Função Construtora
 */
console.log("\nFunção Construtora:");

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está falando`);
};

const p2 = new Pessoa2("Carlos", "Alves");
p2.falar();
