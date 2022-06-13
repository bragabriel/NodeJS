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
    const novaCategoria = {
        nome: req.body.nome,
        slug: req.body.slug
    }

    new Categorias(novaCategoria).save().then(() => {
        console.log("Categoria salva com sucesso!")
    }).catch((err) => {
        console.log("Erro ao salvar categoria! " + err)
    })
})

//exportando nossas rotas
module.exports = router