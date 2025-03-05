// Arrays são como um lista e coleção de dados, onde podemos armazenar vários valores em uma única variável.

// Podemos criar um array de várias formas, como por exemplo:
const alunos = ["Luiz", "Maria", "João"]; // Array de strings
const numeros = [1, 2, 3, 4, 5]; // Array de números
const produtos = ["Notebook", "Celular", "Tablet"]; // Array de strings

//Não é uma boa prática misturar tipos de dados em um array
const misturado = ["Luiz", 10, true, "teste", 25, "teste"];

console.log(alunos);
console.log(alunos[0]); // Luiz
alunos[0] = "Eduardo";
alunos[3] = "Luiza";
console.log(alunos);
console.log(alunos[0]); // Eduardo

//Verificando o tamanho do array
console.log(alunos.length); // 3

//Adicionando Elementos no array
alunos[alunos.length] = "Luiza";
alunos[alunos.length] = "Fabio";
alunos[alunos.length] = "Luana";

//Adicionando Elementos no array de forma mais simples usando push e unshift
alunos.push("Luiza"); // Adiciona no final do array
alunos.unshift("Luiza"); // Adiciona no início do array
console.log(alunos);

//Removendo Elementos do array 
alunos.pop(); // Remove o último elemento do array
alunos.shift(); // Remove o primeiro elemento do array

console.log(alunos);
delete alunos[1]; // Remove o elemento do índice 1, mas mantém o índice vazio

console.log(alunos);

//fatiar o array
console.log(alunos.slice(0, 3)); // Retorna os elementos do índice 0 ao 3
console.log(alunos.slice(0, -2)); // Retorna os elementos do índice 0 ao penúltimo elemento

//Verificar se é um array
console.log(alunos instanceof Array); // true

//Em javascript o array é um objeto também
console.log(typeof alunos); // object

//acessando um elemento que não existe
console.log(alunos[50]); // undefined