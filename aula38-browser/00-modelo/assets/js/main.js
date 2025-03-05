const div = document.querySelector('.paragrafos');
const paragrafos = div.querySelectorAll('p')

//Pegando os estilos computados do Body pelo Browser
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
// console.log(backgroundColorBody);

for( paragrafo of paragrafos) {
    console.log(paragrafo);
    paragrafo.style.backgroundColor = backgroundColorBody;
    paragrafo.style.color = 'white';
}

// console.log(document.body.style.backgroundColor);