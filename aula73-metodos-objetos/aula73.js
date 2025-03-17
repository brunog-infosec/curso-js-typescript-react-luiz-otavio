/**
 * Object.values
 * Object.entries
 * Object.assign (des, any)
 * Object.getOwnPropertyDescriptor(o, 'prop')
 * ...(spread)
 *
 * Já foi visto:
 * Object.keys (retorna as chaves)
 * Object.freeze(objeto) (impede alteração objeto.)
 * Object.defineProperties (define várias propriedades)
 * Object.defineProperty (Define uma propriedade)
 */

//Copiando objetos com Spread Operator

const produto = { nome: "Produto", preco: 1.8 };
const outroProduto = { ...produto, tipo: "cozinha" }; //Spread Operator

console.log(produto);
console.log(outroProduto);

// Copiando com Object.assign
const copo = Object.assign({}, produto, { material: "vidro" });
copo.nome = "copo";
console.log(copo);

// Object.keys
console.log("copo keys", Object.keys(copo));

// Definindo propriedades: writable, enumerable, configurable
Object.defineProperty(produto, "nome", {
  writable: false,
  configurable: false,
});

// Object.getOwnPropertyDescriptor(o, 'prop')

console.log(Object.getOwnPropertyDescriptor(produto, "nome"));

// Assim não podemos modificar as chaves, nem deletar
produto.nome = "Outro Produto";
delete produto.nome;
console.log(produto);

// Porem se for uma chave que não definimos
produto.preco = 0;
delete produto.preco;
console.log(produto);

// Object.values -> Retorna os valores das chaves
console.log(Object.values(produto))

// Object.entries -> Retona as um array ( chave e valores )
console.log(Object.entries(produto))

// Podemos então fazer uma iteração e destructuring direto usando entries
for (let [chave, valor] of Object.entries(copo)) {
    console.log(chave,valor)
}