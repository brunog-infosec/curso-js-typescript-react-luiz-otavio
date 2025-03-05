function mostraHora() {
    let data = new Date();

    return data.toLocaleString('pt-Br', {
        hour12: false
    })
}

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000)

setTimeout(() => {
    clearInterval(timer)
}, 6000);

setTimeout(() => {
    console.log("olá, mundo")
}, 7000);