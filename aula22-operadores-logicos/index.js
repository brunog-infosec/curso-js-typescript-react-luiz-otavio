/* Operadores Lógicos
&& -> AND -> E -- Todas expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -- Somente uma condição verdadeira para ser verdadeira
! -> NOT -> NÃO -- Inverta a condição da expressão

*/

console.log(true && true); // true
console.log(true || false); // true
console.log(!true); // false

const tenhoDinheiro = true;
const estaChovendo = false;
console.log(tenhoDinheiro || estaChovendo); // true
console.log("Tenho Dinheiro:", !tenhoDinheiro);

const usuario = 'Bruno';
const senha = '123';

//Verificando usando um caso real
const vaiLogar = usuario === 'Bruno' && senha === '123';
console.log('Usuário Logado:',vaiLogar);