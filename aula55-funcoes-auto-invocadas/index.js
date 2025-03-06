// IIFE -> Imediately Invoked function expression

//Geralmente utilizamos para fugir do escopo Global , e assim não deixar nossas variáveis escapar para o Escopo Global

function qualquerCoisa(){
    console.log("...")
}
qualquerCoisa(); // -> deveriamos fazer a chamada da mesma

//Porém com auto invoke function, criamos a função anônima que vai 
// abrigar todo nosso código e ser chamada automaticamente, prevenindo assim de vazar variáveis para o Browser

const nome = 'Bruno'
const sobrenome = 'Garcia'
const idade = 38;
const peso = 63;
const altura = 1.70;

//Com isso também podemos receber argumentos de fora, e passar pra nossa auto invoke function

(function(nome,sobrenome,idade,peso,altura){
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome(nome))
    }

    function falaCaracteristicas() {
        console.log(idade, peso, altura)
    }

    falaNome();
    falaCaracteristicas();
})(nome,sobrenome,idade,peso,altura);