const express = require("express");
//carregando o módulo express para a variável express

const app = express();
//variável app está recebendo a função express() que vem do módulo express
//Ou seja, qualquer coisa que vamos usar do express, vamos usar a partir da variável app



//criando uma rota principal
app.get("/", function(req, res){
    res.send("Seja bem-vindo ao meu app!"); //enviar
});

//criando uma segunda rota: /sobre
app.get("/", function(req, res){
    res.send("Minha pagina 'sobre'")
});

//criando uma terceira rota: /blog
app.get("/", function(req, res){
    res.send("Bem-vindo ao meu blog!")
});

//abrindo um servidor usando express:

//primeiro executa o app.listen 8081
//depois executa a função (que no exemplo, é para exibir uma msg de servidor rodando)
app.listen(8081, function(){
    console.log("Servidor rodando na url: http://localhost:8081");
});
