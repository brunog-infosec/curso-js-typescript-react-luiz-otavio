// conhecendo a função Date();
// const data = new Date(); //Pega a data atuala no timestamp UNIX, 01/01/1970
// console.log(data.toString()); // Retorna a data formatada para o horário atual com GMT -3 configurado na máquina
// const dataUnix = new Date(0);
// console.log(dataUnix.toUTCString()); // Retprna a data do marco zero UNIX formatada para UTC

// // As data trabalham com tempo em milisegundos
// // Para fazermos os cálculos fazemos
// // Hora = 60 * 60 * 1000 * quantidadeHoras
// // Dia = 60 * 60 * 24 * 1000 * quantidadeDias

// // Mostrando uma data

// let dataFormatada = new Date(2019,0,10,23,59,0,1000);
// console.log(dataFormatada.toString());

// // Os valores omitidos serão zerados
// dataFormatada = new Date(2024, 11, 31, 6);
// console.log(dataFormatada.toString());

// //Podemos informar a Data também no formato de String
// dataFormatada = new Date('2025-12-31 23:59:59');
// //dataFormatada = new Date('2025-12-31T23:59:59'); dessa forma também é aceita

// console.log(dataFormatada.toString());

// // Pegando os valores separados
// console.log('Dia', dataFormatada.getDate());
// console.log('Mês', dataFormatada.getMonth() + 1); // Vai retornar o indice, 0 a 11, por isso adiciona +1
// console.log('Ano', dataFormatada.getFullYear());
// console.log('Hora', dataFormatada.getHours());
// console.log('Minutos', dataFormatada.getMinutes());
// console.log('Segundos', dataFormatada.getSeconds());
// console.log('ms', dataFormatada.getMilliseconds());
// console.log('Dia Semana', dataFormatada.getDay()); // 0 - Domingo e 6 - Sábado

// console.log(Date.now()); // Retorna a data do marco zero em milisegundos até hoje
// const dataAtual = new Date(1740050745935); // Formata a data
// console.log(dataAtual.toString());

//Criando uma função para formatar a data no modo Brasileiro

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formatData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth());
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const minutos = zeroAEsquerda(data.getMinutes());
  const segundos = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} - ${hora}:${minutos}:${segundos}`;
}

const dataAgora = new Date();
const dataBrasil = formatData(dataAgora);
console.log(dataBrasil);


