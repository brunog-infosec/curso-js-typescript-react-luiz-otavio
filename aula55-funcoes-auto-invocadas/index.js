// IIFE -> Immediately Invoked Function Expression
//Geralmente utilizamos para fugir do escopo Global , e assim não deixar nossas variáveis escapar para o Escopo Global

function qualquerCoisa() {
    console.log("...")
}
qualquerCoisa(); // -> deveriamos fazer a chamada da mesma

//Porém com auto invoke function, criamos a função anônima que vai 
// abrigar todo nosso código e ser chamada automaticamente, prevenindo assim de vazar variáveis para o Browser

const nome = 'Bruno'
const sobrenome = 'Garcia'
const idade = 38;
const peso = 63;
const altura = 1.70;

//Com isso também podemos receber argumentos de fora, e passar pra nossa auto invoke function

(function (nome, sobrenome, idade, peso, altura) {
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome(nome))
    }

    function falaCaracteristicas() {
        console.log(idade, peso, altura)
    }

    falaNome();
    falaCaracteristicas();
})(nome, sobrenome, idade, peso, altura);

// Exemplificando com uso Real em projetos das Invoked Functions
/**
 * Exemplo Real de Uso: Protegendo Variáveis do Escopo Global
 * Imagine que temos um site onde manipulamos um carrinho de 
 * compras, mas não queremos expor suas funções e variáveis ao escopo global. 
 * Podemos usar uma IIFE para encapsular esse código.
*/

const Carrinho = (function () {
    // Variáveis privadas (não acessíveis fora da IIFE)
    let itens = [];

    // Função para adicionar item ao carrinho
    function adicionarItem(item) {
        itens.push(item);
        console.log(`Item "${item}" adicionado ao carrinho.`);
    }

    // Função para remover item do carrinho
    function removerItem(item) {
        itens = itens.filter(i => i !== item);
        console.log(`Item "${item}" removido do carrinho.`);
    }

    // Função para exibir o carrinho
    function listarItens() {
        console.log("Carrinho:", itens.length ? itens : "Vazio");
    }

    // Expor apenas funções que queremos tornar públicas
    return {
        adicionarItem,
        removerItem,
        listarItens
    };
})();

// Tentando acessar `itens` diretamente (não funciona porque está encapsulado)
console.log(typeof itens); // undefined

// Usando o "módulo" do carrinho
Carrinho.adicionarItem("Fone de Ouvido");
Carrinho.adicionarItem("Mouse Gamer");
Carrinho.listarItens();
Carrinho.removerItem("Fone de Ouvido");
Carrinho.listarItens();
