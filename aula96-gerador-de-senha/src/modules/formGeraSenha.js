import gerarSenha from "./geradores";
const senhaGerada = document.querySelector(".senha-gerada");
const qtdCaracteres = document.querySelector(".qtd-caracteres");
const checkMaisculas = document.querySelector(".chk-maisculas");
const checkMinusculas = document.querySelector(".chk-minusculas");
const checkNumeros = document.querySelector(".chk-numeros");
const checkSimbolos = document.querySelector(".chk-simbolos");
const btnGerarSenha = document.querySelector(".gerar-senha");

export default () => {
    btnGerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    })
};

function gera() {
    const senha = gerarSenha(
        qtdCaracteres.value,
        checkMaisculas.checked,
        checkMinusculas.checked,
        checkNumeros.checked,
        checkSimbolos.checked
    )

    return senha || 'Nada Selecionado';
}