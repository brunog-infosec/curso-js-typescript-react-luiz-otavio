// try {
//     console.log(naoexisto)
// } catch (err) {
//     console.log('variavel não existe')
//     return err;
// }


// evite mostrar o erro para o usuário, guarde ele num diretório de logs, ou em uma variável

try {
    const multiplica = (x, y) => (x * y);
    console.log(multiplica(10,2))
    console.log(multiplica(10, 'a'))
} catch (error) {
    console.log(error)
}

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') 
        { throw new ReferenceError ('x e y precisam ser números') }
    return x + y;
}


// O Bloco try será executado, e caso ocorra algum erro o bloco catch é executado
// Caso não ocorra nenhum erro, somente o try é executado.

try {
    console.log(soma(10,20))
    console.log(soma('a', 20))
} catch (error) {
    // console.log(error)
    console.log("Alerta",error)
}