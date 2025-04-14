require("dotenv").config();

const express = require("express");
const app = express();

//Conexão com Banco de Dados
const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit("pronto"); //Emitir um sinal de conexão
  })
  .catch((e) => {
    console.log(e);
  });

//Importação das Rotas
const routes = require("./routes");
const path = require("path");
const {
  middlewareGlobal,
  outroMiddleware,
} = require("./src/middlewares/middleware"); // Importação do middleware

// tratamento do body das requisições pelo node expresss é obrigatório utilizar essa função
app.use(express.urlencoded({ extended: true }));

//Referenciando o caminho do static pages
app.use(express.static(path.resolve(__dirname, "public")));

// Configuração do Caminho da pasta views
app.set("views", path.resolve(__dirname, "src", "views"));
// Configuração da engine que será utilizada para views
app.set("view engine", "ejs");

//Nossos próprios Middlewares
app.use(middlewareGlobal);
app.use(outroMiddleware);

// Use do express Router
app.use(routes);

// Fazendo o servidor ficar ouvindo a porta http
// Aguarda o sinal da conexão com banco de dados pra depois escutar a porta
app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
  });
});
