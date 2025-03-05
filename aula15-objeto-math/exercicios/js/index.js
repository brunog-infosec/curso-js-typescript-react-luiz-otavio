

const num = Number(prompt("Digite um número: "));

const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = num;
texto.innerHTML += `<p>A raiz quadrada de ${num} é: <strong>${Math.sqrt(num)}</strong></p>`;
texto.innerHTML += `<p>${num} é inteiro: <strong>${Number.isInteger(num)}</strong></p>`;
texto.innerHTML += `<p>É NaN: <strong>${Number.isNaN(num)}</strong></p>`;
texto.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(num)}</strong></p>`;
texto.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(num)}</strong></p>`;
texto.innerHTML += `<p>Com duas casas decimais: <strong>${num.toFixed(2)}</strong></p>`;





