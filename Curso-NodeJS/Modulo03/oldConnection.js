/*
const Sequelize = require('sequelize');

const sequelize = new Sequelize('dbteste', 'root', '1234', {
//                               db,      user,   senha,  {host -> Onde está rodando}
    host: "localhost",
    dialect: 'mysql'  //tipo de db que queremos nos conectar
});


//Autenticando para ver se funcionou 
//  Se funcionou (then) -> Conectado com sucesso
//  Se não (catch) -> Falha ao se conectar
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!");
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro);
});


//MODEL Postagem
const Postagem = sequelize.define('postagens', {
//  definindo                    nome tabela, campos

    titulo: {
        type: Sequelize.STRING //campo titulo vai ser do tipo Varchar
    },
    conteudo: {
        type: Sequelize.TEXT //campo conteudo vai ser TEXT (ilimitado)
    }
});

//Gerando o MODEL no mysql
 Postagem.sync({force: true}); 

//Inserindo mais dados em Postagem
Postagem.create({
    titulo: "Batman",
    conteudo: "Alfred, me trz um cafee, por gentileza."
})


//MODEL Usuário
const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING //varchar
    },
    sobrenome: {
        type: Sequelize.STRING //varchar
    },
    idade: {
        type: Sequelize.INTEGER //int
    },
    email: {
        type: Sequelize.STRING //varchar
    }
})

//Gerando o MODEL no mysql
 Usuario.sync({force: true});

Usuario.create({
    nome: "Gabriel",
    sobrenome: "Braga",
    idade: 20,
    email: "gabriel@gabriel.com"
})

/*
Conferindo os dados no mysql prompt:
> show databases;
> use dbteste;
> show tables;
> describe postagens;
> describe usuarios
 

*/