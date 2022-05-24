var http = require('http');

//abrindo um servidor http
http.createServer(function(req, res){

    res.end("Hello World! Welcome to my website using Node.JS")
        //enviar msg

}).listen(8081)
//informando em qual porta de rede abriremos nosso servidor

console.log("Servidor rodando")

