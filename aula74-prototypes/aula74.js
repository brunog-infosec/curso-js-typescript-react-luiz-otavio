/*
Javascript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro.

Definição de protótipo

Protótipo é o termo usado para se referir ao que foi criado pela

primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo ( proto )

que vem da propriedade prototype da função construtora que foi usada para

criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor

do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

}

// Podemos remover o método de dentro da criação e passarmos para o nosso protótipo
Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
}

// Pessoa.prototype === pessoa1.__proto__

// Muito importante, método criados dentro da função construtora tem prioridade para serem chamados sobre 
// os membros da cadeia de protótipos


const pessoa1 = new Pessoa('Bruno', 'Garcia'); // Função Construtora

const data = new Date();
// Por exemplo no objeto Data que criamos a cadeia começa no próprio objeto
// Depois vai para o objete Date.prototype -> e depois Object.prototype
// O prototype é compartilhado entre todos os objetos criados por aquela função construtora.