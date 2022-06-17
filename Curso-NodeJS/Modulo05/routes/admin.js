const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

require('../models/Categoria');
const Categorias = mongoose.model('categorias');

require('../models/Postagem');
const Postagem = mongoose.model('postagens');

router.get('/', function(req, res){
    res.render('admin/index')
})

router.get('/posts', (req, res)=>{
    res.send("Página de posts")
})

router.get('/categorias', (req, res)=>{
    Categorias.find().lean().sort({date: 'desc'}).then((categorias) => {
        res.render('admin/categorias', {categorias: categorias})
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao listar as categorias")
        res.redirect('/admin')
    })
   
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

router.get("/categorias/edit/:id", (req, res) => {
    Categorias.findOne({_id:req.params.id}).lean().then((categoria) => {
        res.render("admin/editcategorias", {categoria: categoria})
    }).catch((err) => {
        req.flash("error_msg", "Esta categoria não existe.")
        res.redirect("/admin/categorias")
    })
   
})


router.post("/categorias/edit", (req, res) => {
    Categorias.findOne({ _id: req.body.id }).then((categoria) => {

        let erros = []

        if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
            erros.push({ texto: "Nome invalido" })
        }
        if (!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null) {
            erros.push({ texto: "Slug invalido" })
        }
        if (req.body.nome.length < 2) {
            erros.push({ texto: "Nome da categoria muito pequeno" })
        }
        if (erros.length > 0) {
            Categoria.findOne({ _id: req.body.id }).lean().then((categoria) => {
                res.render("admin/editcategorias", { categoria: categoria})
            }).catch((err) => {
                req.flash("error_msg", "Erro ao pegar os dados")
                res.redirect("admin/categorias")
            })
            
        } else {
            categoria.nome = req.body.nome
            categoria.slug = req.body.slug

            categoria.save().then(() => {
                req.flash("success_msg", "Categoria editada com sucesso!")
                res.redirect("/admin/categorias")
            }).catch((err) => {
                req.flash("error_msg", "Erro ao salvar a edição da categoria")
                res.redirect("admin/categorias")
            })

        }
    }).catch((err) => {
        req.flash("error_msg", "Erro ao editar a categoria")
        res.redirect("/admin/categorias")
    })
})

router.post("/categorias/deletar", (req, res) => {
    Categorias.deleteOne({_id: req.body.id}).then(() => {
        req.flash("success_msg", "Categoria deletada com sucesso!")
        res.redirect("/admin/categorias")
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao deletar a categoria!")
        res.redirect("/admin/categorias")
    })
})

router.get("/postagens", (req, res) => {

    Postagem.find().lean().populate({path: 'categoria', strictPopulate: false}).sort({data: "desc"}).then((postagens) => {
        res.render("admin/postagens", {postagens: postagens})
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao listar as postagens")
        console.log(err)
        res.redirect("/admin")
    })
})

router.get("/postagens/add", (req, res) => {

    Categorias.find().lean().then((categorias) =>{
        res.render("admin/addpostagem", {categorias: categorias})
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao carregar o formulário.")
        res.redirect("/admin")
    })
})

router.post("/postagens/nova", (req, res) => {
  
    var erros= []

    if(req.body.categoria == "0"){
        erros.push({text: "Categoria inválida, registre uma categoria"})
    }
    if(erros.length > 0){
        res.render("admin/addpostagem", {erros: erros})
    }else{
        const novaPostagem = {
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            conteudo: req.body.conteudo,
            categoria: req.body.categoria,
            slug: req.body.slug
        }

        new Postagem(novaPostagem).save().then(() => {
            req.flash("success_msg", "Postagem criada com sucesso!")
            res.redirect("/admin/postagens")
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro durante o salvamento da postagem")
            res.redirect("/admin/postagens")
        })
    }
})

//exportando nossas rotas
module.exports = router