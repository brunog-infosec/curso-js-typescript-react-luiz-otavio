function relogio() {

    const relogio = document.querySelector('.relogio')

    let seconds = 0;
    let timer = null;


    document.addEventListener('click', function (e) {
        const element = e.target;
        if (element.classList.contains('iniciar')) {
            clearInterval(timer)
            startTimer();
            relogio.classList.remove('pausado')
        }
        if (element.classList.contains('pausar')) {
            relogio.classList.add('pausado')
            clearInterval(timer);
        }
        if (element.classList.contains('zerar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)
            relogio.innerHTML = '00:00:00'
            seconds = 0;
        }
    })


    function createTimer(seconds) {
        const data = new Date(seconds * 1000)
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }


    function startTimer() {
        timer = setInterval(() => {
            seconds++
            relogio.innerHTML = createTimer(seconds)
        }, 1000)

    }

}

relogio();