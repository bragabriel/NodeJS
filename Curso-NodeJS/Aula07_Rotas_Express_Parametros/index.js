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
app.get("/sobre", function(req, res){
    res.send("Minha pagina 'sobre'")
});

//criando uma terceira rota: /blog
app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog!")
});

//criando uma quarta rota para utilizar o 'Parâmetro'
app.get('/ola/:cargo/:nome/:cor', function(req, res){
//       /rota :parametro
    

    //res.send(req.params);
    //      req = responsável por receber dados de uma requisição

    //Só podemos usar uma vez o send na página
    res.send("<h1>Ola " + req.params.nome + "</h1>"+"<h2>Seu cargo eh: " + req.params.cargo + "</h2>"+"<h2>Sua cor eh: " + req.params.cor + "</h2>");
})



//abrindo um servidor usando express:

//primeiro executa o app.listen 8081
//depois executa a função (que no exemplo, é para exibir uma msg de servidor rodando)
app.listen(8081, function(){
    console.log("Servidor rodando na url: http://localhost:8081");
});
