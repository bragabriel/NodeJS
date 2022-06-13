/* Carregando Módulos */
    const express = require('express');
    const handlebars = require('express-handlebars');
    const bodyParser = require('body-parser');
    const app = express();
    const admin = require('./routes/admin');
    //const mongoose = require('mongoose');


/* Configurações */

    //Body-Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())

    //HandleBars
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')

    //Mongoose

    //

/* Rotas */
    //prefixo /admin, rotas importadas do admin.js
    app.use('/admin', admin)

/* Servidor */
    const PORT = 8081
    app.listen(PORT, function(){
        console.log("Servidor rodando...")
    })

