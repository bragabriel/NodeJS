const express = require("express"); 
//carregando o módulo express para a variável express

const app = express(); 
//variável app está recebendo a função express() que vem do módulo express
//Ou seja, qualquer coisa que vamos usar do express, vamos usar a partir da variável app



// Abrindo um servidor usando express:
// - Primeiro executa o app.listen 8081
// - Depois executa a função (que no exemplo, é para exibir uma msg de servidor rodando)
app.listen(8081, function(){
    console.log("Servidor Rodando na URL http://localhost:8081");
})

