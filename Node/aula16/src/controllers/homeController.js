exports.paginaInicial = (req, res) => {
  res.render("index", {
    titulo: 'Titulo da Página',
    numeros: [1,2,3,4,5,6,7,8,9]
  }); // renderizar o template do ejs
  return;
};

exports.trataForm = (req, res) => {
  res.send(req.body);
  return;
};
