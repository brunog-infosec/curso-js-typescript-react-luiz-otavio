// Função Construtura -> retorna objetos
// Função fabrica -> retorna objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
  //Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  //atributos ou métodos privados
  const ID = 12345;
  const metodoInterno = function () {
    console.log(`Id do usuário : ${ID}`);
  };

  //Metodo público
  this.metodo = function () {
    console.log("Sou um metodo do " + this.nome);
    metodoInterno();
  };
}

const p1 = new Pessoa("Carlos", "Oliveira");
const p2 = new Pessoa("Marina", "Joaquina");

// new -> cria um novo objeto vazio, a faz o this apontar para o objeto criado e faz o retorno
console.log(p1.nome, p1.sobrenome);
console.log(p2.nome, p2.sobrenome);
p1.metodo();
p2.metodo();
