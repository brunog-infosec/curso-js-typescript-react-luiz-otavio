function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  // this.estoque = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true, //mostra a chave
    value: estoque, // valor
    writable: false, // não pode alterar
    configurable: true, // configurável? pode ser definida novamente
  });

  Object.defineProperty(this, "estoque", {
    enumerable: true, //mostra a chave
    value: estoque, // valor
    writable: true, // caso true pode alterar seu valor
    configurable: false, // caso false, não pode apagar nem reconfigurar o valor
  });
}

const p1 = new Produto("Bicicleta", 20, 3);
p1.estoque = 5000;
console.log(p1);

// Mostrando as chaves do Objeto
console.log(Object.keys(p1));


// Criando objeto já as propriedades definidas para maior controle
function Pessoa(nome, sobrenome, idade) {
  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: false,
      configurable: true,
    },
    sobrenome: {
      enumerable: true,
      value: sobrenome,
      writable: false,
      configurable: false,
    },
    idade: {
      enumerable: true,
      value: idade,
      writable: false,
      configurable: false,
    },
  });
}

const pessoa1 = new Pessoa("Bruno", "Garcia", 38);
console.log(pessoa1)