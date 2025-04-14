exports.paginaInicial = (req, res, next) => {
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
