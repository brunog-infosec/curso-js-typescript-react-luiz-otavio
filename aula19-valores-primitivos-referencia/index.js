/*

Tipos de Dados Primitivos: string, number, boolean, undefined, null (bigint, symbol)
São imutáveis - Não é possível alterar o valor da variável diretamente (com exceção de bigint e symbol) - Atribuição por cópia

Referência (mutáveis) - Arrays, Objetos, Funções - Atribuição por referência (apontam para o mesmo lugar na memória)
*/

// string
let nome = 'Bruno';
nome[0] = 'A';
console.log(nome); // Bruno

let a = 'A';
let b = a; // Cópia
console.log(a, b); // A A
a = 'Outra coisa';
console.log(a, b); // Outra coisa A

//array
let numeros = [1, 2, 3];
let outros = numeros; // Cópia por referência (apontam para o mesmo lugar na memória)
console.log(numeros, outros); // [1, 2, 3] [1, 2, 3]
numeros.push(4);
console.log(numeros, outros); // [1, 2, 3, 4] [1, 2, 3, 4] - Altera os dois pois apontam para o mesmo lugar na memória

// Para fazer uma cópia de um array - utilizando spread operator - Cópia por valor
let outros2 = [...numeros];
numeros.push(5);
console.log(numeros, outros2); // [1, 2, 3, 4, 5] [1, 2, 3, 4]


// objeto
let carro = {marca: 'Fiat', ano: 2018};
let novoCarro = carro; // Cópia por referência (apontam para o mesmo lugar na memória)
console.log(carro, novoCarro); // {marca: 'Fiat', ano: 2018} {marca: 'Fiat', ano: 2018}
carro.marca = 'Chevrolet';
console.log(carro, novoCarro); // {marca: 'Chevrolet', ano: 2018} {marca: 'Chevrolet', ano: 2018} - Altera os dois pois apontam para o mesmo lugar na memória
//copiando objeto
let novoCarro2 = {...carro};
carro.marca = 'Ford';
console.log(carro, novoCarro2); // {marca: 'Ford', ano: 2018} {marca: 'Chevrolet', ano: 2018}