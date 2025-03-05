/* Escreva uma função que recebe um número eretorne o seguinte: -
Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisível por 3 e 5 = FizzBuzz
Número NÃO é divisível por 3 e 5 = Retorna o próprio número
Checar se o número é realmente um número
Use a função com números de O a 100
*/


const divisivel = (number) => {
    if (typeof number !== 'number') return 'Not a Number';
    if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
    if (number % 3 === 0) return 'Fizz';
    if (number % 5 === 0) return 'Buzz';
    return number;
}

for (let number = 0; number <= 100; number++) {
    console.log(number, divisivel(number));
}

console.log(divisivel('a'))

