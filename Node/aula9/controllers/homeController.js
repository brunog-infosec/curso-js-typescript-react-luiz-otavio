exports.paginaInicial = (req, res) => {
  res.send(`
        <form action="/" method="POST">
        Nome do Cliente: <input type="text" name="nome" placeholder="Digite seu nome..."/>
        <button>Enviar Formulário</button>
        `);
};

exports.trataForm = (req, res) => {
  res.send("Formulário Enviado!");
};
