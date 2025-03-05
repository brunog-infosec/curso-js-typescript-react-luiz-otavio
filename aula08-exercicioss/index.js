const nome = "Bruno";
const sobrenome = "Garcia";
const idade = 38;
const peso = 60;
const altura = 1.63;
let anoNascimento;
anoNascimento = 2025 - idade;

let imc;
imc = peso / (altura * altura);


console.log(`
    ${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg, tem ${altura} de altura, e seu IMC é de ${imc.toFixed(2)}
    ${nome} ${sobrenome} nasceu em ${anoNascimento}
    `);