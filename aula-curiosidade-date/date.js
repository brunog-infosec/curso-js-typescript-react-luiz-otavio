// Captura a data atual
const dataAtual = new Date();

// Extrai dia, mês e ano
const dia = dataAtual.getDate();
const mes = dataAtual.getMonth() + 1; // getMonth() retorna 0 para janeiro, 1 para fevereiro, etc.
const ano = dataAtual.getFullYear();
const horario = dataAtual.getTime();



//Outra maneira mais simples de formatar a data
const dataAtualFormatada = new Date();
const dataFormatadaCompleta = dataAtualFormatada.toLocaleDateString('pt-BR');
const horarioFormatado = dataAtualFormatada.toLocaleTimeString('pt-BR');

console.log('Data Atual: ', dataFormatadaCompleta); // Exemplo de saída: "07/02/2025"
console.log('Horário: ', horarioFormatado); // Exemplo de saída: "14:30:15"
