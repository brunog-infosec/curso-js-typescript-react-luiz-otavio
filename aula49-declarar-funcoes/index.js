//Declaração de função que acontecem hoisting (Literais)
//Assim podemos chamar a função antes de declará-la no código
//Todas funções serão elevadas para o topo do arquivo
falarOi();


function falarOi() {
    console.log("Oi")
}

//Elas são First-Class objects
//Podem ser tratadas como dados
//Function expression, jogar uma função dentro de uma variável
//Assim podemos executar a variável como uma função normalmente
//Não é comum dar nome na função em Functions Expressions
const souUmDado = function(){
    console.log("Sou um Dado")
}

// souUmDado();

//Podemos ainda chamar uma função de outra
//Tratando a função com um dado, passando uma funcao para outra
// que servirá como parâmetro

function executarFuncao(funcao){
    funcao();
}

//Deste modo passamos nossa Função como referência
executarFuncao(souUmDado);

//Arrow Functions (ES6+)
const arrowFunction = () => console.log("Sou uma arrow function");
arrowFunction();

// Com Arrow Function temos acesso ao elemento .this


//Dentro de um Objeto também podemos ter uma função
// Jogamos a função com um método de um objeto
const objeto = {
    falar: function() {
        console.log("Estou falando")
    }
}

//Nas versões mais novas podemos criar a função da seguinte forma:
// Sem os 2 pontos e sem a palavra "function"
const objeto2 = {
    falar() {
        console.log("Estou falando 2")
    }
}

objeto.falar();
objeto2.falar();