// try {
//     //É executada quando não há erros
// } catch (error) {
//     //É Executada quando há erros
// } finally {
//     //Executado sempre
// }

//Exemplo de código usando objeto Date
function retornaHora(date) {
    if (date && !(date instanceof Date)) { 
        throw new TypeError('Esperando isntância de Date')
    }
    if (!date) {
        date = new Date();
    }

    return date.toLocaleTimeString('pt-Br', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
}


try {
    console.log(retornaHora())
    console.log(retornaHora(new Date('01-01-1970 12:12:00')))
    retornaHora('sdfsfsdfsd')
} catch (error) {
    console.log('Tratando erros')
    // console.log(error)
} finally {
    console.log('Tenha um bom dia')
}


