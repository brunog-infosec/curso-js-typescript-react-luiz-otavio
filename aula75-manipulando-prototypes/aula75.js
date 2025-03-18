// Criando novos objetos -> new Object
// No momento que são criados são iniciados já o Object.prototype

const objetoA = {
  chaveA: "A",
  //__proto__: Object.prototype
};

const objetoB = {
  chaveB: "B",
};

const objetoC = new Object();
objetoC.chaveC = "C";

// Setando prototipos de um objeto para outro
Object.setPrototypeOf(objetoB, objetoA);
Object.setPrototypeOf(objetoC, objetoB);
console.log(objetoC.chaveA);

//Acessando os prototipos de um objeto
Object.getPrototypeOf(objetoA);

// Criando nossos prototipos a partir de outros objetos

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

//Criando o método a partir do prototipo da função construtora
Produto.prototype.desconto = function (valor) {
  this.preco = this.preco - (this.preco * valor) / 100;
};

Produto.prototype.aumento = function (valor) {
  this.preco = this.preco + (this.preco * valor) / 100;
};

//Criando outro objeto de forma literal, e reaproveitar o prototype do
// Produto usando Object.setPrototypeOf(objetoAserSetado, valor do novo prototipo)
const produto1 = {
  nome: "Bicicleta",
  preco: 250,
};

Object.setPrototypeOf(produto1, Produto.prototype);


//Criando objeto com new Object
const produto2 = new Produto("Camiseta", 29);

//Criando o objeto a partir do método Object.create "herdando" o prototipo
const produto3 = Object.create(Produto.prototype);
produto3.nome = "Celular";
produto3.preco = 50;

//Podemos também já criar um objeto, como prototipo, e definir suas
//  propriedades
const produto4 = Object.create(Produto.prototype, {
  nome: {
    writable: true,
    enumerable: true,
    configurable: true,
    value: "Relógio",
  },
  preco: {
    writable: true,
    enumerable: true,
    configurable: true,
    value: 100,
  },
});

produto1.desconto(10);
console.log(produto1);
produto1.aumento(20);
console.log(produto1);
produto2.desconto(10);
console.log(produto2);
produto2.aumento(10);
console.log(produto2);
produto4.desconto(20);
console.log(produto4);
