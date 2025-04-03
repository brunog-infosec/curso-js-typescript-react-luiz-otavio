//Arquivo de configuração do WebPack

//importar modulo path do node.js
const path = require('path'); // CommonJS

//Exportar esse modulo do arquivo
module.exports = {
    mode: 'development', //development 
    entry: './src/index.js', //Arquivo de entrada do código fonte
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    }, // objeto de configuração do arquivo onde ficará nosso bundle convertido
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    }, //
    devtool: 'source-map' // mapeamento dos recursos originais que foram convertidos para bundle.js
}