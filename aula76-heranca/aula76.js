// Sistema de gestão de Herança de Produtos
// O que isso tem em comum ? Camiseta, caneca, lapis
// Produto -> métodos aumento, desconto
// Camiseta atributos = cor
// Caneca atributos = tipo do material

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

// Funcão Construtora para Camiseta
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco); //Herança dos atributos do objeto Pai
  this.cor = cor;
}

//Pegando atribuição do prototype de Produto para nosso Objeto Camiseta (herança)
Camiseta.prototype = Object.create(Produto.prototype);
// Recriando o Construtor
Camiseta.prototype.constructor = Camiseta;

// Sobreescrevendo métodos da função construtora pai (Produto)
Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

//Função construtora para Caneca
function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco); // Herança dos atributos do objeto Pai
  this.material = material;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number") return;
      estoque = valor;
    },
  });
}

//Delegação do prototype de Produto ao prototype de Caneca (linkar) *Essa é uma forma de herança em JS, porém não é tratado como herança específicamento pela linguagem*
Caneca.prototype = Object.create(Produto.prototype);
// Recriando o Construtor
Caneca.prototype.constructor = Caneca;
// Criando método excluiso Caneca
Caneca.prototype.desconto = function () {};

const camiseta1 = new Camiseta("T-shirt", 10, "branco");
camiseta1.aumento(30);
console.log(camiseta1);
const caneca1 = new Caneca("Xícara de Café", 7, "Porcelana", 5);
caneca1.desconto(2);
console.log(caneca1);
