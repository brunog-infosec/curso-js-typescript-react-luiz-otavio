const express = require("express");
//Carregando e executando o express;
const app = express();

// tratamento do body das requisições pelo node expresss é obrigatório utilizar essa função
app.use(
  express.urlencoded(
    {
      extended: true
    }
  )
)
//pametros da url
// https://www.facebook.com/profiles/121231

//query strings => ? &
// /profiles/123231?campanha=googleads&nome_campanha=seila

//       rota , função (requisição, resposta)
app.get("/", (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome do Cliente: <input type="text" name="nome" placeholder="Digite seu nome..."/>
    <button>Enviar Formulário</button>
    `);
});

// utilizar : para mostra que é parametro e  ? para mostrar que é opcional
app.get("/testes/:userId?/:parametro?", (req, res) => {
  //console.log(req.params); //parametros da url
  //console.log(req.query); //Query Strings da url
  console.log(req.query);
  res.send(req.query);
});

// Criando a rota para receber a requisição POST
app.post("/", (req, res) => {
  res.send(`O que você enviou foi: ${req.body.nome}`);
  console.log(req.body); // mostra o formulário dentro da requisição
});

// Fazendo o servidor ficar ouvindo a porta http
app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
