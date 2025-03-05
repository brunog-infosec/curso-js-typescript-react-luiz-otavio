// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
function updateDate() {

    const date = new Date();
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    };
    // Converte a data para representação local, de acordo com as opções
    const texto = date.toLocaleDateString("pt-BR", options);
    // console.log("Current time in milliseconds: " + date.toLocaleTimeString());
    titulo.innerHTML = texto.charAt(0).toUpperCase() + texto.slice(1);
}



// captura o elemento h1
const titulo = document.querySelector("h1#mostrar-data");
// Coloca o conteúdo, com primeiro caractere maísculo, e o restante do texto


setInterval(updateDate, 1000);


// Podemos utilizar dateStyle e timeStyle também nas options
/*
const options = {
    dateStyle: 'full',
    timeStyle: 'short',
}

----------------------------------

Outra forma de fazer com array:
const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
const dias = ['domingo','segunda','terça','quarta','quinta','sexta','sábado']

h1.innerHtml = `${dias[date.getDay()]}, ${date.getDate()} de ${meses[date.getMonth()]} de ${date.getFullYear()}
${date.getHour()}:${date.getMinute()}`




*/


