function rand(min = 1, max = 5) {
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

// Podemos tentar simular de forma sincrona a execução das promises
// esperaAi("Fase 1", rand())
//   .then((fase) => {
//     console.log(fase);
//     return esperaAi("Fase 2", rand());
//   })
//   .then((fase) => {
//     console.log(fase);
//     return esperaAi("Fase 3", rand());
//   })
//   .then((fase) => console.log(fase))
//   .catch((e) => console.log(e));

// Vai executar nossas Promises em sequência
// Para verificarmos os erros usamos o try catch
// Async vai permitir que você use o await dentro da função para aguardar uma
// Promise ser finalizada
async function executa() {
  try {
    const fase1 = await esperaAi("Fase 1", rand());
    console.log(fase1);
    const fase2 = await esperaAi("Fase 2", rand());
    console.log(fase2);
    const fase3 = await esperaAi("Fase 3", rand());
    console.log(fase3);
    console.log("Terminamos na fase:", fase3);
  } catch (e) {
    console.log(e);
  }
}

executa();

/**
 * As Promises tem 3 estados ->
 * Pending -> esperando ser resolvida ( Quando não utilizar o await ou then)
 * Fullfilled -> resolvida
 * Rejected -> rejeitada
 */
