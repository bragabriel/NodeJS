const express = require("express"); 
//carregando o módulo express para a variável express

const app = express(); 
//variável app está recebendo a função express() que vem do módulo express
//Ou seja, qualquer coisa que vamos usar do express, vamos usar a partir da variável app

const handlebars = require('express-handlebars');
//carregando o módulo handlebars do express para a variável handlebars

const Sequelize = require('sequelize');



/* Config */
    
    /* Template Engine */

    //usando o handlebars como a nossa template-engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'})); //main: template padrão dessa aplicação
    app.set('view engine', 'handlebars');


    /* Conexão com o DB */
    const sequelize = new Sequelize('dbteste', 'root', '1234', {
        //                           db,      user,   senha,  {host -> Onde está rodando}
        host: "localhost",
        dialect: 'mysql'  //tipo de db que queremos nos conectar
    });


/* Server */
    // - Primeiro executa o app.listen 8081
    // - Depois executa a função (que no exemplo, é para exibir uma msg de servidor rodando)
    app.listen(8081, function(){
        console.log("Servidor Rodando na URL http://localhost:8081");
    })

