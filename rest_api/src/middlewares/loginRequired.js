import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  // Caso não tenha o header de autenticação retorna erro
  if (!authorization) {
    return res.status(401).json({
      errors: ['Login Required'],
    });
  }

  const [, token] = authorization.split(' '); // Separa os dados do token apenas

  try {
    // Realiza a decodificação do Token e trás os dados do user
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados; // Faz o Destructuring e pega o id e email do user
    req.userId = id; // Passa o id para a requisição
    req.userEmail = email; // Passa o email para a requisição
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token Expired or Invalid.'],
    });
  }
};
