/*
 If pode ser usado sozinho
 Else é somente usado se tiver um if antes
 Else if podemos ter vários
 Podemos usar condições sem else if, utilizando apenas if e else
*/

const hora = 23;

// if (hora < 12) {
//   console.log("Bom dia");
// } else if (hora < 18) {
//   console.log("Boa Tarde");
// } else {
//   console.log("Boa noite");
// }

if (hora >=0 && hora <= 11) {
    console.log('Bom dia')
} else if(hora >= 12 && hora <= 17) {
    console.log('Boa tarde')
} else if(hora >=18 && hora <= 24) {
    console.log("Boa noite")
} else {
    console.log("Olá, tenha um excelente Dia")
}