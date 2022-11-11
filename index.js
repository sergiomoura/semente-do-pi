// Importar o express
const express = require('express');

// Criar o servidor
const servidor = express();

// Definir a public como pasta de arquivos estáticos
servidor.use(express.static("public"));

// Definir as rotas
servidor.get(
    '/produtos',       // endereço ou caminho a receber a requisição
    (req, res) => {    // função que será executada quando a req chegar
        return res.sendFile(__dirname + '/views/produtos.html');
    }
)

// Fazer meu servidor rodar
servidor.listen(3000);