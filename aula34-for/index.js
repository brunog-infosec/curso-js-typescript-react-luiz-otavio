// for (condicaoInicial; condicaoFinal; incremento) {
//     código
// }

// Exemplo com Incremento
console.log('\nIncremento:')
for (let i = 0; i <= 5; i++) {
    console.log("Numero:",i);
}

//Decremento
console.log('\nDecremento:')
for (let i = 100; i>=0; i-=10) {
    console.log("Número",i);
}

//Percorrendo um array

console.log("\nArray de Frutas")
const frutas = ["Maçã", "Banana", "Uva", "Morango", "Pera"];
for(let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}