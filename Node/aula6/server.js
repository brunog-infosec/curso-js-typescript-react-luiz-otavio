const express = require("express");

//Carregando e executando o express;
const app = express();

//Método GET
//Express vai ajudar a trabalhar nas rotas da aplicação
// http://meusite.com/ <- GET -> navegador faz o GET para baixar a página /
// http://meusite.com/sobre <- GET -> navegador faz o GET para baixar a página /sobre
// http://meusite.com/ <- GET -> navegador faz o GET para baixar a página /contato

//Operações mais comuns a fazer numa api
// CRUD -> Create, Read, Update, Delete
//          POST   GET    PUT    DELETE

//       rota , função (requisição, resposta)
app.get("/", (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome"/>
    <button>Enviar</button>
    `);
});

// Criando a rota para receber a requisição POST
app.post('/', (req, res) => {
    res.send("Recebi o formulário");
})

// Criando outra rota
app.get("/contato", (req, res) => {
  res.send("Obrigado por entrar em contato com a gente");
});

// Fazendo o servidor ficar ouvindo a porta http
app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
