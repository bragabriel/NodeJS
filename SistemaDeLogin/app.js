const express = require('express'); //utilizaremos o módulo express 
const session = require('express-session'); //utilizaremos o express-session para manipular as sessões
const bodyParser = require('body-parser')

const port = 3000;
var path = require('path'); //utilizaremos o path para manipular e setar os diretórios das views
const app = express(); //chamando o express dentro da variável app


var login = "admin"
var password = "123"

//fazendo com o que o express utilize as sessions
app.use(session({secret:'dsaghf721365dgyb87d12giuby'}));
                //definindo o segredo da sessão (token)

//fazendo com que meu app tbm use o body-parser
app.use(bodyParser.urlencoded({extended:true})); //usado para recuperar os dados do formulário

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname + '../public')));
app.set('views', path.join(__dirname, '/front'));


//Definindo meu post
app.post('/',(req, res)=>{
    //console.log(req.body.login);
    if(req.body.password == password && req.body.login == login){
        //logado com sucesso
        //criando a sessão
        req.session.login = login;

        res.render('meuPerfil', {login: login});
        //vai para a pag meu perfil
        //passando login como parâmetro
        console.log('O meu usuário logado é: ' + req.session.login);
    }
    else{
        res.render('Login');
    }
})


//Definindo minha rota - Página inicial
app.get('/', (req, res)=>{
    //Verificando se está logado -> só acessa essa pág se estiver logado
    if(req.session.login){
        res.render('meuPerfil', {login: login}) //vai para a pag meu perfil
        //passando login como parâmetro
    }
    else{
        res.render('Login')//não está logado -> não pode acessar a pág. Fica na pág de login
    }
    res.render('Login');
})

//Criando o server
app.listen(port, ()=>{
    console.log('servidor rodando!');
})