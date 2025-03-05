const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//Atribuição via desestruturação
// const { nome, sobrenome, idade } = pessoa;
// console.log(nome, sobrenome, idade);
const { nome,sobrenome, ...resto } = pessoa;
console.log(nome,sobrenome, resto);

// Quando pegamos pelo operador rest, ele pega o restante do objeto
// e coloca em um objeto novo
const { endereco: { rua, numero } } = pessoa;
console.log(rua, numero);