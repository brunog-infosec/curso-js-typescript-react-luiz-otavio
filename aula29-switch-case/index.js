
//função que vai retornar o nome do dia da Semana
function getDayOfWeek(diaSemana) {
	let diaSemanaTexto;
	switch (diaSemana) {
		case 0:
			diaSemanaTexto = 'Domingo';
			break;
		case 1:
			diaSemanaTexto = 'Segunda';
			break
		case 2:
			diaSemanaTexto = 'Terça';
			break;
		case 3:
			diaSemanaTexto = 'Quarta';
			break;
		case 4:
			diaSemanaTexto = 'Quinta';
			break;
		case 5:
			diaSemanaTexto = 'Sexta';
			break;
		case 6:
			diaSemanaTexto = 'Sábado';
			break;
		default:
			diaSemanaTexto = 'Dia inválido';
			break;
	}

	return diaSemanaTexto;
}

const dataAtual = new Date('2025-12-30 00:00:00');

let diaSemana = dataAtual.getDay();
let diaSemanaTexto = getDayOfWeek(diaSemana);

console.log(diaSemana, diaSemanaTexto)


//Forma mais simpels de resolver
// const dia = new Array('Domingo', 'segunda', 'terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado',);
// const mes = new Array('janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')
// const data = new Date();

// console.log(`Hoje é ${dia[data.getDay()]} dia ${data.getDate()} de ${mes[data.getMonth()]} de ${data.getFullYear()} `);

