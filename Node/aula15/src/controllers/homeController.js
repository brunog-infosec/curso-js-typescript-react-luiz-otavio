exports.paginaInicial = (req, res) => {
  req.session.usuario = { nome: "Bruno", logado: true };
  // req.flash("info", "Olá mundo");
  // req.flash("error", "erro");
  // req.flash("success", "sucesso");
  // console.log();
  console.log("Pagina Inicial\n");
  // console.log(`Olha o que tem na req.session.nome ${req.session.nome}`)
  res.render("index"); // renderizar o template do ejs
  // next();
  return;
};

exports.trataForm = (req, res) => {
  res.send(req.body);
  return;
};
