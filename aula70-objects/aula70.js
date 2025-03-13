//Declaração
const pessoa1 = {
  nome: "Bruno",
  sobrenome: "Garcia",
};

// Utilizando um construtor de objetos
const pessoa2 = new Object();
pessoa2.nome = "Bruno";
pessoa2.sobrenome = "Garcia";
pessoa2.idade = 38;
pessoa2.falarNome = function () {
  return `Meu nome é ${this.nome}`;
};
// retornando Data de nascimento
pessoa2.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

// "Acessando" atributos do objetos
const chave = "sobrenome";
console.log(pessoa1["nome"]); // Colchetes + nome da chave
console.log(pessoa1[chave]); // Variável - útil ao receber dados de um DB
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);

// Apagando Chaves do Objeto usando 'delete' + nome da chave
// delete pessoa2.nome;

console.log(pessoa2.falarNome());
console.log(pessoa2.getDataNascimento());

//Verificando as chaves do objeto com For in
for (let chave in pessoa2) {
  console.log(chave);
}

//Verificando valores das chaves
for (let chave in pessoa2) {
  console.log(pessoa2[chave]);
}

// Factory Functions / Constructor Functions / Classes

//Factory Function
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    //getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const pessoa3 = criaPessoa("Carlos", "Almeida");
console.log(pessoa3);
console.log(pessoa3.nomeCompleto);

// Constructor Functions (Nome da função em maísculo, e atribuição por this)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

// New cria um objeto vazio, e atrela a palavra this ao objeto, e depois retorna o this
const p1 = new Pessoa("Marcos", "Teixeira");
console.log(p1); // Vão retornar o nome do construtor
p1.nome = "José";
console.log(p1);

// Lembrete: mesmo o objeto sendo constante, não podemos alterar seu endereço
// de memória apenas seu valor inplicito

// Travar nosso  objeto para não ser alterado
Object.freeze(p1); // Pode ser informado dentro do objeto:
/**
 *function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  Object.freeze(this);
}  */
// Agora ele não pode ser alterado
p1.nome = "Maria"; // Não será alterado
console.log(p1);

