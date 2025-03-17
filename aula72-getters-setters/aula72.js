function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  let estoquePrivado = estoque; // Proteger nossa variavel

  Object.defineProperty(this, "estoque", {
    enumerable: true, //mostra a chave
    configurable: true, // configurável?
    //método get -> pegar e mostrar o valor
    get: function () {
      return estoquePrivado;
    },
    set: function (value) {
      if (typeof value !== "number") {
        // throw new TypeError("Valor inválido informado para estoque");
        console.log("Valor não númerico");
        return;
      }
      estoquePrivado = value;
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
// console.log(p1);
// pegando o valor
p1.estoque = 20;
console.log(p1.estoque);
p1.estoque = "aa";
console.log(p1.estoque);

// Usando Getter e Setter na Função Factory

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(value) {
      //validação do valor quando for usado o set
      // value = value.replace('/\','')
      nome = value;
    },
  };
}
console.log("------------ Factory Function ---------");
const p2 = criaProduto("Bola de Futebol");
const p3 = criaProduto('Camiseta');
console.log(p2.nome); //Getter
console.log(p3.nome);
p2.nome = 'Computador de bolso' // Setter
console.log(p2.nome);
