const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/Categoria');
const Categorias = mongoose.model('categorias');

router.get('/', function(req, res){
    res.render('admin/index')
})

router.get('/posts', (req, res)=>{
    res.send("Página de posts")
})

router.get('/categorias', (req, res)=>{
    res.render('admin/categorias')
})

router.get('/categorias/add', (req, res) => {
    res.render('admin/addcategoria')
})

router.post('/categorias/nova', (req, res) => {

    var erros = []

    //verificando se o campo nome:
    // é vazio         ou          undefined               ou        nulo
    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({
            texto: "Nome inválido!"
        }) //colocando um novo dado dentro do array 'erros'
    }

    //verificando se o campo slug:
    // é vazio         ou          undefined               ou        nulo
    if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
        erros.push({
            texto: "Slug inválido!"
        })
    }

    if(req.body.nome.length < 2){
        erros.push({
            texto: "Nome da categoria muito pequeno!"
        })
    }

    if(erros.length > 0){ //Se houve items no array de erro:
        res.render("admin/addcategoria", {erros: erros})
    }else{ //Se não houver erros
        const novaCategoria = {
            nome: req.body.nome,
            slug: req.body.slug
        }
    
        new Categorias(novaCategoria).save().then(() => {
            req.flash("success_msg", "Categoria criada com sucesso!")
            res.redirect("/admin/categorias")
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro ao salvar a categoria, tente novamente.")
            res.redirect("/admin")
        })
    }    
})

//exportando nossas rotas
module.exports = router