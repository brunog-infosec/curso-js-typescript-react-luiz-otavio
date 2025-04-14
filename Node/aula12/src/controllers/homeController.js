exports.paginaInicial = (req, res) => {
  res.render('index') // renderizar o template do ejs
};

exports.trataForm = (req, res) => {
  res.send("Formulário Enviado!");
};
