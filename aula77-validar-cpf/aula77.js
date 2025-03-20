// Validador de CPF (Exercício Curso JS e TS - Prof Luis Otávio Miranda):
// let cpf = "705.484.450-52";
let cpf = "070.987.720-03";

let cpfLimpo = cpf.replace(/\D+/g, "");
console.log("CPF a ser válidado:", cpfLimpo);

function cpdValidate(cpf) {
  if (cpf.length !== 11) return console.log('CPF têm mais de 11 digitos');
  const calc1 = cpf.slice(0, 9);

  let verificador = 10;
  let total = 0;
  for (let digito of calc1) {
    total += digito * verificador;
    verificador--;
  }
  console.log("soma parcial digito 1:", total);

  let firstDigit = 11 - (total % 11);

  if (firstDigit > 9) {
    firstDigit = 0;
  }

  console.log("Primeiro Digito:", firstDigit);

  // Segundo Calculo
  const calc2 = cpf.slice(0, 10);

  let verificador2 = 11;
  let total2 = 0;
  for (let digito2 of calc2) {
    total2 += digito2 * verificador2;
    verificador2--;
  }
  console.log("soma parcial digito 2:", total2);

  let secondDigit = 11 - (total2 % 11);

  if (secondDigit > 9) {
    secondDigit = 0;
  }

  console.log("Segundo Digito:", secondDigit);

  cpfValido = calc1 + firstDigit + secondDigit;
  if (cpfValido === cpf) {
    console.log("CPF Válido");
  } else {
    console.log("CPF Inválido");
  }
}

cpdValidate(cpfLimpo);
