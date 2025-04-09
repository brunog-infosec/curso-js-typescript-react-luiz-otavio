const nome = "bruno";
const sobrenome = "garcia";

const falaNome = () => nome + " " + sobrenome;

//Exportação Modulos pelo Node
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

//Podemos também abreviar a exportação
exports.nome = nome; //exports é uma referência para module.exports
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

//this também é relacionado diretamento ao exports
this.textoPequeno = "Um texto qualquer";

//Será criado como se fosse um objeto com as exportações
// console.log(exports);

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

exports.Pessoa = Pessoa;

//Podemos exportar tudo em um objeto
module.exports = {
  nome,
  sobrenome,
  falaNome,
  Pessoa,
};
