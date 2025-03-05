// Vamos aprender objetos em JavaScript
// const array = [1, 2, 3, 4, 5];
// array.push(6);
// array.unshift(0);
// console.log(array);
// Podemos modificar os valores de um array, porém não podemos reatribuir o array inteiro, pois seu espaço na memória é fixo

// Agora vamos aprender sobre objetos
// Dentro dos objetos, temos propriedades ou atributos, e valores
const pessoa = {
  nome: 'João',
  idade: 30,
  profissao: 'programador',
};

// Função para criar objetos
// Chamamos de factory function pois ela é uma função que cria objetos
function criarPessoa(nome, idade, profissao) {
  return { // Podemos encurtar a escrita, pois o nome da propriedade é o mesmo nome da variável
    nome,
    idade,
    profissao,
  }; // Podemos também diminuir o código: return { nome, idade, profissao };
}

// Criando um objeto com a função, e passando os argumentos para a função
// Argumento é o valor que passamos para a parametro da função
const pessoa1 = criarPessoa('Maria', 25, 'designer');
const pessoa2 = criarPessoa('Carlos', 30, 'Mecânico');
const pessoa3 = criarPessoa('João', 19, 'Técnico de Informática');
const pessoa4 = criarPessoa('José', 42, 'Pedreiro');


console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);

// Podemos criar um objeto, e dentro do objeto um método
// Lembrando que funções e métodos executam ações
// Utilizamos a palavra reservada this para acessar as propriedades do objeto que estamos criando, ou seja, this.nome acessa o nome do objeto 'pessoa5'
const pessoa5 = {
  nome: 'Ana',
  idade: 35,
  profissao: 'advogada',
  // Método
  falar() {
    console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}`);
  },

  incrementarIdade() {
    this.idade++;
 }
};

// Chamando o método

pessoa5.falar();
pessoa5.incrementarIdade();
pessoa5.falar();