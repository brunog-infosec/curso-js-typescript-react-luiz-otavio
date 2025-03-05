// Funções em Javascript
// Funções são blocos de código que podem ser chamados e executados em qualquer parte do código.
// Geralmente funções recebem um valor por parametro, processam esse valor e retornam um resultado.

function saudacao(nome) {
    return `Bom dia ${nome}`;
}

const variavel = saudacao("Luiz");
console.log(variavel); // Bom dia Luiz


function soma(x, y) {
    const resultadoSoma = x + y;
    return resultadoSoma;
}


// Se chamar a função sem passar os argumentos, o resultado será NaN porque o valor de x e y será undefined
const resultadoSoma = soma(); // NaN
const resultadoSoma2 = soma(2); // NaN
const resultadoSoma3 = soma(2, 2); // 4


// Tudo que está dentro de uma função é chamado de escopo da função, ou seja, as variáveis declaradas dentro de uma função só podem ser acessadas dentro dela.
function multiplicacao(x, y) {
    const resultado = x * y;
    return resultado;
}

// console.log(resultado); // ReferenceError: resultado is not defined

// Funções podem ser armazenadas em variáveis
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9)); // 3

// Nada após o return é executado
function teste() {
    return console.log("teste");
    console.log("teste depois do return");
}

teste(); 

// Funções podem ser passadas como argumentos para outras funções
function subtracao(x, y) {
    return x - y;
}

function calculoDeDoisNumeros(x, y, operacao) {
    return operacao(x, y);
}


const resultadoSoma4 = calculoDeDoisNumeros(10, 5, soma);
console.log(resultadoSoma4); // 15
const resultadoSubtracao = calculoDeDoisNumeros(10, 5, subtracao);
console.log(resultadoSubtracao); // 5

// Funções podem ser retornadas por outras funções
function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);
console.log(duplica(2)); // 4
console.log(triplica(2)); // 6
console.log(quadruplica(2)); // 8


//função anonima, ela não tem nome e é atribuída a uma variável
const raiz2 = function (n) {
    return n ** 0.5;
};

console.log(raiz2(25)); // 5

//Arrow function
// As arrow functions são uma forma mais simples de escrever funções em JavaScript.
// Elas são muito utilizadas em funções anônimas e funções de callback.
// A sintaxe é mais curta e não altera o comportamento da função.
// Eliminamos a palavra function e adicionamos a seta => após os parâmetros.
// Se a função tiver apenas um parâmetro, podemos remover os parênteses.
// Se a função tiver apenas uma linha de código, podemos remover as chaves e a palavra return.

const raiz3 = n => n ** 0.5;
console.log(raiz3(81)); // 9

// Não é interessante usar funções para fazer várias coisas, o ideal é que cada função faça apenas uma coisa.
// Funções devem ser pequenas e fazer apenas uma coisa específica.