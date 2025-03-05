// alert('Comando alert');

// No navegador temos o elemento window que é o objeto global
// window.alert('Comando alert');
// Quando usamos o alert, confirm ou prompt, o navegador entende que estamos chamando o objeto window


// Se o usuário clicar em cancelar, o confirm retorna false
// Se o usuário clicar em ok, o confirm retorna true
const confirmacao = confirm('Comando confirm, Deseja Realmente apagar?');
if (confirmacao) {
    alert('Apagado com sucesso');
} else {
    alert('Operação cancelada');
}


const nome = prompt('Comando prompt, Qual o seu nome?');
alert(`Olá, ${nome}`);
// O prompt retorna o valor digitado pelo usuário ou null se o usuário clicar em cancelar
// O prompt sempre retorna uma string, mesmo que o usuário digite um número

// O alert, confirm e prompt são funções síncronas, ou seja, o código só continua a ser executado após o usuário interagir com o alert, confirm ou prompt

const num1 = Number(prompt('Digite um número'));
const num2 = Number(prompt('Digite outro número'));
const soma = num1 + num2;
alert(`A soma dos números é ${soma}`);
// Pela template string podemos também fazer o cálculo dentro da string
// alert(`A soma dos números é ${num1 + num2}`); // Dessa forma o código fica mais limpo, porém menos legível e pode dificultar a manutenção do código