//Dados Primitivos: String, Number, Undefined, Null, Boolean, Symbol
const nome = 'Lucas'; //String
const nome1 = 'Carlos';
const nome2 = 'Lucas';
const num1 = 10; //Number
const num2 = 5.5; //Number float
let nomeAluno; //Undefined -> não aponta para lugar nenhuma na memória
let sobrenomeAluno = null; //Nulo -> não aponta para lugar nenhuma na memória
const aprovado = true; //Boolean -> true ou false (lógico)

console.log(typeof nome, nome); //ver o tipo da variável e o valor
console.log(typeof num1, num1);
console.log(typeof num2, num2);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof aprovado, aprovado);

//Valores por referência em arrays (cuidado com a atribuição)
const a = [1, 2];
const b = a;

//os valores de a e b apontam para o mesmo lugar na memória

console.log(a, b);
b.push(3);
console.log(a, b); //O array b aponta para o array a, então se alterar o array b o array a também é alterado