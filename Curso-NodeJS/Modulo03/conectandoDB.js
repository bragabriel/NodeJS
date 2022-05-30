const Sequelize = require('sequelize');

const sequelize = new Sequelize('teste', 'root', '1234', {
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
  