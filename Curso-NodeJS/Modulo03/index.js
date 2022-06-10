const express = require('express'); 
//carregando o módulo express para a variável express

const app = express(); 
//variável app está recebendo a função express() que vem do módulo express
//Ou seja, qualquer coisa que vamos usar do express, vamos usar a partir da variável app

const handlebars = require('express-handlebars');
//carregando o módulo handlebars do express para a variável handlebars

const bodyParser = require('body-parser');

const Post = require('./models/Post'); //recebendo o models de Post


/* Config */
    
    /* Template Engine */

    //usando o handlebars como a nossa template-engine
    app.engine('handlebars', handlebars.engine({
        defaultLayout: 'main', //main: template padrão dessa aplicação
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        }
    }));

    app.set('view engine', 'handlebars');


    /* Body Parser */
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())


/* Rotas */
    app.get('/', function(req, res){
        //pegando todos os posts em Ordem Decrescente
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home', {posts: posts}) //passando variaveis para o handlebars 
        })
    })

    app.get('/cad', function(req, res){
        //res.send('Rota de Cadastro de Posts');
        res.render('formulario')//renderizando a pag formulario.handlebars
    })

    app.post('/add', function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){//if success
            res.redirect('/')
            //res.send("Post criado com sucesso!")
        }).catch(function(erro){//if error
            res.send("Houve um erro: " + erro)
        })
    }) //essa rota só é acessada com a requisição feita com POST


/* Server */
    // - Primeiro executa o app.listen 8081
    // - Depois executa a função (que no exemplo, é para exibir uma msg de servidor rodando)
    app.listen(8081, function(){
        console.log("Servidor Rodando na URL http://localhost:8081");
    })

