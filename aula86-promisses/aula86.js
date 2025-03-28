function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, time) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject(new Error)
    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

esperaAi("Conexão com Banco de Dados..", rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Buscando dados na Base..", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi(11, rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => {
    console.log("Exibindo os dados na Tela");
  })
  .catch( e => {
    console.log('Erro valor inválido:',e)
  });
