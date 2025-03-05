// continue = continua para a próxima iteração do laço ignorando o restante de código
// break = para a execução do laço, e sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {
    if (numero === 2 || numero === 5 || numero === 8) {
        console.log("Pulei o numero", numero)
    }
    console.log(numero);

    if (numero === 7) {
        console.log('numero 7 encontrado, saindo...')
        break;
    }

}