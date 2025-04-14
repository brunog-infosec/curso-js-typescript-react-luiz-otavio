exports.middlewareGlobal = (req, res, next) => {
  console.log("Passei no middleware global");
  if (req.body.nome) {
    //interceptando valores e alterando
    req.body.nome = req.body.nome.replace("Bruno", "*Não pode usar esse nome*");
    console.log(`Vi que foi postado ${req.body.nome}`);
  }
  next();
};

exports.outroMiddleware = (req, res, next) => {
  console.log("Sou seu outro Middleware");
  next();
};
