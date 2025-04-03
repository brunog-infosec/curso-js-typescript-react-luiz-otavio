function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject(false);
        return;
      }
      resolve(msg);
    }, time);
  });
}

//Promise.all Promise.race Promise.resolve Promise.reject
const promises = [
  //   "Primeiro valor",
  esperaAi("Promise 1", rand(1, 5)),
  esperaAi("Promise 2", rand(1, 5)),
  esperaAi("Promise 3", rand(1, 5)),
  //   "Outro valor",
];

// Retorna todas as promessas assim que prontas na ordem passada
// Se houver um erro vai retornar somente o erro, e rejeitar todas outras

Promise.all(promises)
  .then((valor) => console.log(valor))
  .catch((e) => console.log(e));

// Race -> Passando todas as promessas, a primeira que resolver ele entrega o valor
// Será resolvida a que levar menos tempo para processar
// Porém ainda assim vai executar as demais promessas em segundo plano
Promise.race(promises)
  .then((valor) => console.log(valor))
  .catch((e) => console.log(e));

// Promise.resolve e Promise.reject
function baixaPagina() {
  const emCache = false;

  if (emCache) {
    return Promise.resolve("Página em Cache");
  } else {
    return Promise.reject("Página precisa ser baixada..");
  }
}

baixaPagina()
  .then((dadosPagina) => console.log(dadosPagina))
  .catch((e) => console.log(e));
