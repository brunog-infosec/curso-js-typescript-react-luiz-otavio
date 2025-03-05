//Podemos utilizar o caractere \ para escapar caracteres especiais

let texto = "O \"JavaScript\" é uma linguagem de programação";
console.log(texto); // O "JavaScript" é uma linguagem de programação

//Se quisermos utilizar o caractere \ em uma string, devemos utilizar \\
let texto2 = "O \\ é uma barra invertida";
console.log(texto2); // O \ é uma barra invertida

//Podemos utilizar o caractere \n para pular uma linha
let texto3 = "Primeira linha\nSegunda linha";
console.log(texto3);

//Podemos utilizar o caractere \t para dar um espaço de tabulação
let texto4 = "Primeira coluna\tSegunda coluna";
console.log(texto4); // Primeira coluna	Segunda coluna

//Podemos utilizar o caractere \b para dar um backspace
let texto5 = "Primeira coluna\bSegunda coluna";
console.log(texto5); // Primeira colunSegunda coluna

//Podemos utilizar o caractere \r para dar um carriage return
let texto6 = "Primeira coluna\rSegunda coluna";
console.log(texto6); // Segunda coluna

//Podemos utilizar o caractere \f para dar um form feed
let texto7 = "Primeira coluna\fSegunda coluna";
console.log(texto7); // Primeira coluna
                    // Segunda coluna

//Podemos pegar o valor do indice de uma string utilizando o método charAt
let texto8 = "JavaScript";
console.log(texto8.charAt(0)); // J
console.log(texto8.charAt(4)); // S
console.log(texto8[8]); // p
console.log(texto8[10]) // undefined

//Podemos concatenar strings utilizando o método concat
let texto9 = "JavaScript";
let texto10 = " é uma linguagem de programação";
console.log(texto9.concat(texto10)); // JavaScript é uma linguagem de programação   
//ou
console.log(texto9 + texto10); // JavaScript é uma linguagem de programação
//ou
console.log(`${texto9}${texto10}`); // JavaScript é uma linguagem de programação


//verificar qual o indice de um caractere ou palavra em uma string
let texto11 = "JavaScript";
console.log(texto11.indexOf("Script")); // 4
console.log(texto11.indexOf("script")); // -1 não encontrou
console.log(texto11.indexOf("a")); // 1 retorna o primeiro indice encontrado
console.log(texto11.lastIndexOf("a")); // 3 retorna o último indice encontrado fazendo a busca de trás para frente
console.log(texto11.indexOf("a", 2)); // 3 retorna o primeiro indice encontrado a partir do indice 2

//Utilizando o método match para buscar uma palavra ou caractere em uma string
let texto12 = "JavaScript é uma linguagem de programação";
console.log(texto12.match(/[a-z]/g)); // Retorna um array com todas as letras minúsculas encontradas

//Utilizando o método search para buscar uma palavra ou caractere em uma string
let texto13 = "JavaScript é uma linguagem de programação";
console.log(texto13.search("Script")); // 4

//Utilizando o método replace para substituir uma palavra ou caractere em uma string
let texto14 = "JavaScript é uma linguagem de programação";
console.log(texto14.replace("JavaScript", "JS")); // JS é uma linguagem de programação

//Substituindo todas as ocorrências de uma palavra ou caractere em uma string
let texto15 = "JavaScript é uma linguagem de programação, JavaScript é uma linguagem de programação";
console.log(texto15.replace(/JavaScript/g, "JS")); // JS é uma linguagem de programação, JS é uma linguagem de programação

//Verificando o tamanho de uma string com o método length
let texto16 = "JavaScript";
console.log(texto16.length); // 10

//Utilizando o método slice para pegar uma parte de uma string
let texto17 = "O Rato roeu a roupa do rei de Roma.";
console.log(texto17.slice(2, 6)); // Rato
console.log(texto17.slice(-5)); // Roma.
console.log(texto17.slice(-5, -1)); // Roma
console.log(texto17.substring(2, 6)); // Rato

//Dividindo uma string em um array com o método split
let texto18 = "JavaScript é uma linguagem de programação";
console.log(texto18.split(" ")); // ["JavaScript", "é", "uma", "linguagem", "de", "programação"]
console.log(texto18.split(' ', 2)); // ["JavaScript", "é"]

//Utilizando o método toLowerCase para transformar uma string em minúscula
let texto19 = "JavaScript";
console.log(texto19.toLowerCase()); // javascript

//Utilizando o método toUpperCase para transformar uma string em maiúscula

console.log(texto19.toUpperCase()); // JAVASCRIPT