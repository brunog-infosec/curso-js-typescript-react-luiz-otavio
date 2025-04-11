const express = require("express");
const app = express();
//Importação das Rotas
const routes = require("./routes");

// tratamento do body das requisições pelo node expresss é obrigatório utilizar essa função
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Fazendo o servidor ficar ouvindo a porta http
app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
