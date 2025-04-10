const fs = require('fs').promises;

module.exports = (caminho, dados) => {
  //criar o arquivo no caminho especificado
  fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf8' });
};
