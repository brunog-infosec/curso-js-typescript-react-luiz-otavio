// Escopo Global

function retornaFuncao(nome) {
    return function() {
        return nome;
    }
};

const funcao  = retornaFuncao('Bruno');
const funcao2 = retornaFuncao('Carlos');

console.log(funcao(), funcao2())