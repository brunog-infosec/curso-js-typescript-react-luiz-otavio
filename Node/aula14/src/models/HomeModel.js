const mongoose = require("mongoose"); //importação do modulo do mongoose

//Criando o esquema no Banco de Dados
const HomeSchema = new mongoose.Schema({
  titulo: { type: String, required: true }, //campo obrigatório para ser enviado
  descricao: String,
});

//Criando o Model (nome do model, e qual o Schema dele)
const HomeModel = mongoose.model("Home", HomeSchema);

const HomeModel = require("../models/HomeModel"); // Importação do Modulo do Home Model


class Home {

}

module.exports = Home;
//Criando os dados na base de dados
// HomeModel.create({
//   titulo: "Outro Titulo qualquer",
//   descricao: "Outra descrição qualquer",
// })
//   .then((dados) => console.log(dados))
//   .catch((erro) => console.log(erro));

// //Mostrando os dados
// HomeModel.find()
//   .then((dados) => console.log(dados))
//   .catch((e) => console.log(e));