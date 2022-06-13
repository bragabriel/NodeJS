const mongoose = require("mongoose");

/* Configurando o mongoose */
mongoose.Priomise = global.Promise;

//mongoose conectando com o Mongo -> ele também vai gerar o banco 'aprendendo' quando realizar a conexão
mongoose.connect("mongodb://localhost/aprendendo", {
    useMongoClient: true
}).then(() => {
    console.log("MongoDB conectado!")
}).catch((err) => {
    console.log("Houve um erro ao se conectar ao mongoDB: " + err)
})


/* Model - Usuários */
//Definindo o Model

//Quando definimos um Model no mongoose, é legal colocar o 'Schema' no final como padronização
const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }
})

//Collection
//nome da Collection (tabela)
mongoose.model('usuarios', UsuarioSchema)
//      nome da collection, collection