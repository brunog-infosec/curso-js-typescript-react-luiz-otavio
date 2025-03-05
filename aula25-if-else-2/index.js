// Executar a condição somente se o número estiver entre 0 e 5.

const numero = 9;

if (numero >= 0 && numero <= 5) {
  console.log("O Número está entre 0 e 5");
} else {
  console.log("O Número NÃO está entre 0 e 5");
}

// Verificar se está entre outro range 6 e 8
// Verificar se número está entre 9 e 11
// Assim que encontrar a condição verdadeira sairá da checagem

// Se precisa checar uma coisa independente é melhor criar um if para essa condição
if (numero <= 10 ) {
    console.log('Número é menor ou igual a 10')
}

if (numero >= 0 && numero <= 5) {
  console.log("O Número está entre 0 e 5");
} else if (numero >= 6 && numero <= 8) {
  console.log("O Número NÃO está entre 6 e 8");
} else if (numero >= 9 && numero <= 11) {
  console.log("O Número está entre 9 e 11");
} else {
  console.log("O Número NÃO está entre 0 e 11");
}


console.log("Esse código sempre será executado");
