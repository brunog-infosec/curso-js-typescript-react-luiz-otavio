exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Uma Variavel Local';
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};
