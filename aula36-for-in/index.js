const frutas = ['Pera', 'Maça','Uva', 'Melão'];

// For in -> Lê os indices ou chaves do objeto
for (let index in frutas) {
    console.log(frutas[index]);
}

const produto = {
    nome: 'lego',
    tipo: 'star wars',
    quantidade: 19,
    preco: 120.00
}


//Como acessar as chaves e propriedades do objeto
// produto.nome // lego
// produto['nome'] //lego
console.log('\nAcessando o Objeto:')

for (let key in produto) {
    console.log(`${key}: ${produto[key]}`)
    
}