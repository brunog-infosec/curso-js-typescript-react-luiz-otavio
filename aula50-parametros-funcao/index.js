//Passagem de argumentos quando não especificados

//Argumentos -> Sustenta todos argumentos enviados (Somente com a palavra function)
function funcao() {
    console.log(arguments)
}

funcao("valor", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
// Vamos ter um retorno de um objeto com todos argumentos passados

//COm isso teremos algo poderoso, como no exemplo:

function somar() {
    let total = 0
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total)
}

somar(19, 1, 3, 4, 45, 2, 6)

// Isto pode gerar confusão e estranheza, porque na maioria
// das linguagem não são aceitos argumentos, que não estão
// nos parametros da função

/**
 * Sendo assim podemos ou não enviar os argumentos
 * ou também criar os parametros na função
 */

function funcao2(a, b, c, d, e, f, g) {
    console.log(a, b, c, d, e, f, g)
}

funcao2(1, 2, 3)
//Senão enviarmos os argumentos o js 
// criará os valores padrões para eles como undefined
// Ele não vai gerar erro nenhum


function soma(a = 0, b = 0, c = 0) {
    // b = b || 0; // para corrigir se argumento nao for passado
    // Jeito atuar de corrigir é já definir um valor padrão para os parametros
    console.log(a + b + c)
}

soma(2) // Se passar só 1 parametro, o retorno vai ser Nan
soma(2, undefined, 20) // para b assumir o valor default enviamos argumento undefined


//Atribuição via desestruturação com objetos
function objeto2({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade)
}

let obj = { nome: 'Bruno', sobrenome: 'Garcia', idade: 38 }
objeto2(obj);

//Atribuição via desestruturação com arrays
function numeroArray([valor1, valor2, valor3]) {

    console.log(valor1, valor2, valor3)

}

let numeros = [1,2,3]
numeroArray(numeros)

// Utilizando o rest operator para receber parametros
// O Rest operator sempre deve ser o último parametro da função
function conta(operador, acumulador = 1, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;

    } 
    console.log(acumulador)
}

conta('-', 1, 10,20,30,40)
conta('+', 1, 10,20,30,40)
conta('*', 1, 10,20,30,40)


// Lembrando não existe arguments em Arrow Functions
// Também podemos utilizar o rest operador com Function Expression !

const args = (...args) => console.log(args)

// Podemos capturar os argumentos também usando o rest operator 