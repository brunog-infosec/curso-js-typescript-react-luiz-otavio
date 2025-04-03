// XMLHttpRequest = Fazer requisição de qualquer tipo de dado
// Por convenção é utilizado a variavel xhr -> xml http request
// A requisição HTTP , Verbo GET para o servidor

/**
 * const xhr = new XMLHttpRequest(); // Convenção padrão, usando o construtor do XMLHtppRequest
    // requisição
    xhr.open(obj.method, obj.url, true);
    // xhr.send() -> caso for method POST
    xhr.send(null);
    xhr.addEventListener("load", () => {
      //Verificar o código de resposta
      if (xhr.status >= 200 && xhr.status < 300) {
        obj.success(xhr.responseText); // enviar a resposta para função
      } else {
        obj.error({
          code: xhr.status,
          msg: xhr.statusText,
        });
      }
    });
 * 
 */

const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); // Convenção padrão, usando o construtor do XMLHtppRequest
    // requisição
    xhr.open(obj.method, obj.url, true);
    // xhr.send() -> caso for method POST
    xhr.send(null);
    xhr.addEventListener("load", () => {
      //Verificar o código de resposta
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText); // enviar a resposta para função
      } else {
        reject(xhr.statusText); // enviar o erro caso ocorra
      }
    });
  });
};

//Capturando o elemento link que vai ser clicado
document.addEventListener("click", (e) => {
  const el = e.target; //captura o elemento
  const tag = el.tagName.toLowerCase(); // Pegando a tag clicada e passando lower case

  if (tag === "a") {
    e.preventDefault(); //Prevenir de carregar a página
    carregaPagina(el);
  }
});

//Carregando a página
async function carregaPagina(el) {
  const href = el.getAttribute("href");

  const objConfig = {
    method: "GET",
    url: href,
    // success(response) {
    //   carregaResultado(response);
    // },
    // error(errorText) {
    //   console.log(errorText);
    // },
  };

  //Nova Forma:
  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch (e) {
    console.log(e);
  }
}
//   request(objConfig)
//     .then(response => {
//         console.log(response) // Verifica a resposta
//         carregaResultado(response);
//     })
//     .catch(error => {
//         console.log(error) // Debug do erro *Not Found*
//     });

// Mostrando o resultado da resposta na nossa div resultado
function carregaResultado(response) {
  const resultado = document.querySelector(".result");
  resultado.innerHTML = response;
}
