/*
Avalição Curto-circuito
&& -> false && true -> false, retornar o primeiro valor false, ou retorna o ultimo verdadeiro
|| -> true || false -> vai retornar o primeiro valor verdadeiro, ou senão houve retornará o ultimo falso
Valores Falsy:
*false
0
'' "" `` - strings vazias
null / undefined
NaN
*/

//Exemplo de caso prático
function falarOi() {
  return "Oi";
}

const vaiExecutar = true;
console.log(vaiExecutar && falarOi()); // ele retornará a ultimo valor verdadeiro 

//Verificando se o  usuário selecionou alguma cor
const corUsuario = 'white';
const corPadrao = corUsuario || "red";

console.log('Cor Selecionada: ',corPadrao)

// Pegadinha
const [a,b,c,d,e] = [0,null,'false',false,NaN]; // retornará a string 'false'

console.log(a || b || c || d || e); // se todas forem falsas ele retornará a ultima falsa.

// Caso haja um verdadeiro ele para e retorna o primeiro verdadeiro 