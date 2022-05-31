const Sequelize = require('sequelize');

/* Conexão com o DB */
const sequelize = new Sequelize('postapp', 'root', '1234', {
    //                           db,      user,   senha,  {host -> Onde está rodando}
    host: "localhost",
    dialect: 'mysql' //tipo de db que queremos nos conectar
});

//exportando o Sequelize & o sequelize
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}