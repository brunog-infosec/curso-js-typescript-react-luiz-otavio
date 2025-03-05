const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' }
]

// Seleciona o elemento com a classe container
const container = document.querySelector('.container');
// Cria um elemento div
const div = document.createElement('div');

// Itera sobre o array elementos
// Para cada elemento do array, cria um elemento com a tag e texto do elemento
// Adiciona o elemento criado ao div
for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    //Colocando o texto dentro do nosso nó de texto
    // elemento.innerText = texto;
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

// Adiciona o div ao container
container.appendChild(div);


// Outra forma mais fácil de fazer:
/**
 const resultado = document.querySelector('.container');

 const div = document.createElement ('div')

 
for (let i = 0; i < elementos.length; i++) {    
    let {tag, texto} = elementos[i];
    resultado.innerHTML += `<${tag}>${texto}</${tag}>`;    
}
  
container.appendChild(div)

 */