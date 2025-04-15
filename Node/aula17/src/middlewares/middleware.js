exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Uma Variavel Local';
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};

exports.checkCsrfError = (error, req, res, next) => {
  if(error && error.code === 'EBADCSRFTOKEN') {
    return res.render('404')
  }
};

exports.csrfMiddleware = (req,res,next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
}