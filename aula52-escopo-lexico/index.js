// A função conhece tudo que foi declaro dentro dela
// E também as variaveis declarada como "vizinhas" que não estão
// dentro da função e busca acima no código até chegar no escopo global


// A prioridade da função é sempre utilizar as variáveis do escopo local,
// sempre lembrando o local as variáveis mais internas foram declaradas


const nome = 'luiz'

function falaNome() {
    console.log(nome)
}

function usaFalaNome() {
    const nome = 'Otávio'
    falaNome()
}

usaFalaNome();