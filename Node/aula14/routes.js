const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");


// Com os middlewares, podemos fazer verificações durantes a requisição
//  antes de responder ou mesmo depois de responder ao cliente
//Middleware de exemplo
// function meuMiddleware(req, res, next) {
  //Algo bastante usado é salvar sessão do usuário durante o middleware
  //É mais comum salvar sessões pq elas ficam salvas no lado do servidor
//   req.session = { nome: "bruno", sobrenome: "garcia" };
//   console.log();
//   console.log("Primeiro Middleware");
//   console.log();
//   next();
// }

// function ultimoMiddleware(req, res, next) {
//   console.log();
//   console.log("Ultimo middleware");
//   console.log(`Olha o que tem na req.session.nome ${req.session.nome}`);
//   console.log();
//   return;
// }

//Rotas da Home
route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataForm);

//Rotas de Contato
route.get("/contato", contatoController.paginaInicial);

module.exports = route;
