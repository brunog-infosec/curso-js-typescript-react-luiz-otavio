const express = require("express");
const app = express();
//Importação das Rotas
const routes = require("./routes");
const path = require("path");

// tratamento do body das requisições pelo node expresss é obrigatório utilizar essa função
app.use(express.urlencoded({ extended: true }));

// Configuração do Caminho da pasta views
app.set("views", path.resolve(__dirname, "src", "views"));
// Configuração da engine que será utilizada para views
app.set("view engine", "ejs");

// Use do express Router
app.use(routes);

// Fazendo o servidor ficar ouvindo a porta http
app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
