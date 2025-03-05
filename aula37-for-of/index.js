// O For of pegará o valor de cada indice e te retorna o valor apenas

const nome = 'Bruno Garcia';

for (let valor of nome) {
    console.log(valor);
}

//Iteração com arrays
const nomes = ['Carlos', 'João', 'Maria', 'Pedro', 'Maria', 'Ana', 'Paula'];
console.log('\nArray:\n')
for (const element of nomes) {
    console.log(element)
}

//For each
console.log("## FOREACH ##")

nomes.forEach( (e) => console.log(e))

//For each com indice
console.log("## FOR EACH COM INDICE ##")
nomes.forEach( (e, index, array) => console.log(e, index, array))

// IMPORTANTE - PARA OBJETOS UTILIZAMOS O FOR IN
// FOR CLASSICO cOM ITERAVEIS - (arrays ou strings)
// FOr in - Retorna indice ou chave (string, array ou objetos )
// For of - Retorna o valor em si (iteráveis, arrays ou strings)