// Mesmas regras das variáveis
// Não podem ser modificadas ou atribuir outro valor
// deve sere inicializada e declarada ao mesmo tempo

const constante = 'imutável';
console.log(constante);

/*
constante = 'novo_nome';
console.log(constante); // mostrar erro
*/

//Atribuindo valores para outras várias
const pi = 3.14;
const segundoNumero = 10;

let resultado;

resultado = segundoNumero * pi;
console.log(resultado.toFixed(2));

// pegar o valor da constante anterior
const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado);

// usando uma variável para somar seu valor
let resultadoTriplicado = resultado * 3;
console.log(resultadoTriplicado);
resultadoTriplicado = resultadoTriplicado + 3;
console.log(resultadoTriplicado)

console.log(typeof(resultado + resultadoDuplicado));