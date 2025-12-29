/*
const HomeModel = require('../models/homeModules')

HomeModel.create({
    titulo: "Um titulo de teste...",
    descrição: "Uma descrição de teste..."
})
.then(dados => console.log(dados))
.catch( e => console.log(e))
*/

exports.paginaInicial = (req,res) => {
    res.render('index')
    return
}

exports.trataPost = (req,res) => {
    res.send ("Vi que você preencheu o formulário")
}