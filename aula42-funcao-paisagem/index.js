//Escreva uma função chamada ePaisagem que recebe largura e altura, e retorna true se estiver no modo paisagem, 
// ou false se estiver no modo retrato.

const ePaisagem = (largura, altura) => largura > altura ? true : false; // forma mais verbal
const ePaisagem2 = (largura,altura) => largura > altura; // forma simplificada


console.log(ePaisagem(1920,1080))
console.log(ePaisagem2(1080,1920))