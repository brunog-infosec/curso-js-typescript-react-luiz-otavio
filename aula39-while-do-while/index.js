// While usado quando não sabemos o tamanho do array que estamos trabalhando, quando for falso sairá do laço
// Do while irá executar ao menos uma vez, é necessário uma condição de para para não entrar em loop infinito

// let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }


// Função para gerar numero aleatório

function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}


const min = 1;
const max = 11;
let rand = random(min, max);


rand = 10;
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand)
}


console.log("#####")

do {
    rand = random(min, max);
    console.log(rand)
} while (rand !== 10);