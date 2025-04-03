document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

//usando fetch api
// function carregaPagina(el) {
//   const href = el.getAttribute("href");

//   fetch(href)
//     .then((response) => {
//       if (response.status !== 200) throw new Error("Erro" + response.status);
//       return response.text();
//     })
//     .then((html) => carregaResultado(html))
//     .catch((e) => console.log(e));
// }

//Usando Async Await Function
async function carregaPagina(el) {
  try {
    const href = el.getAttribute("href"); // captura o link
    const response = await fetch(href); // aguarda a resposta da url, sempre retorna uma promise

    if (response.status !== 200) throw new Error("Erro " + response.status); // se o status code for diferente de 200 retorna erro
    const html = await response.text(); //aguarda o html da página
    carregaResultado(html); // renderiza página
  } catch (e) {
    carregaResultado(e); // renderiza o erro na página
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado"); // captura a div
  resultado.innerHTML = response; // renderiza a página na div.
}
