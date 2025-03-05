/**
 * return - retorna um valor
 * termina a função
 */

function soma(a, b) {
    return a + b;
}

const soma1 = soma(4, 10)
console.log(soma1)

// const h1 = document.querySelector('h1');
// h1.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'red'
//     h1.innerText = `Objeto1: ${p1.nome} ${p1.sobrenome}
//                     Objeto2: ${p2.nome} ${p2.sobrenome}
//                     soma: ${soma1}`
// }) //nao retorna nada, apenas faz alguma ação

//Função que retorna um objeto
function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome }
}

const p1 = criaPessoa('Bruno', 'Garcia')
const p2 = criaPessoa('Lucas', 'Silva')
console.log(p1, p2)



// Função com retorno sobreposto
function falaFrase(comeco) {
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('olá')
const resto = fala('Mundo!')

console.log(resto)

//Funções encadeadas retornando uma função
function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

//Funções Closure que estão fechando o escopo
/**
 *  A função criaMultiplicador retorna uma outra função anônima,
 *  que quando invocada, retorna o resultado da multiplicação de "n"
 *  com "multiplicador". Quando você atribui a função criaMultiplicador
 *  a uma variável, como "duplica", "triplica" ou "quadriplica", 
 *  a função interna lembra do valor do argumento 
 *  passado para criaMultiplicador. Isso é conhecido como "closures", onde a função interna tem acesso às variáveis e argumentos da função externa.
 */
const duplica = criaMultiplicador(2) // retorna a funcao esperando receber o 'n'
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))

//Adicionar evento de audio a um elemento
const audioElement = new Audio('beep.mp3');
 
document.addEventListener('keyup', function(e) {
  audioElement.play()
})