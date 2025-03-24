// Atenção *********************************
/**
 * No JavaScript, é possível definir atributos privados
 * usando o prefixo # desde o ECMAScript 2022.
 * Essa sintaxe permite criar atributos realmente privados
 * dentro da classe.
 * 
 * Exemplo:
 * class MyClass {
 *  #privateField;
 *
 *  constructor(value) {
 *   this.#privateField = value;
 *  }
 *
 * getPrivateField() {
 *   return this.#privateField;
 * }
 *}
 *Isso garante que #privateField só pode ser acessado dentro da classe MyClass.
 * 
 * 
 * 
*/

//Atribuição propriedade privada no Javascript
const _velocidade = Symbol("velocidade");

class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  //getter
  get velocidade() {
    return this[_velocidade];
  }

  //setter
  set velocidade(valor) {
    if (typeof valor !== "number") return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  desacelerar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

//Instanciando
const c1 = new Carro("Fusca");

//Simulando aceleração até 200
for (let i = 0; i <= 200; i++) {
  c1.acelerar();
}

// Utilizando Setter
c1.velocidade = 50;

//Utilizando Getter
console.log(c1.velocidade);

////////////////////////////////////////////////////////////////////
// Outro exemplo
console.log("-------------------");

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return this.nome + " " + this.sobrenome;
  }

  set nomeCompleto(fullName) {
    fullName = fullName.split(" ");
    this.nome = fullName.shift();
    this.sobrenome = fullName.join(" ");
  }
}

const p1 = new Pessoa("Bruno", "Garcia");
console.log(p1.nomeCompleto);

console.log("-------------------");
console.log("Setando novo nome");
console.log("-------------------");

//Settando um novo nome
p1.nomeCompleto = "Bruno Silva Marques";
console.log("Nome:", p1.nome);
console.log("Sobrenome:", p1.sobrenome);
console.log(p1.nomeCompleto);
