exports.paginaInicial = (req,res) => {
    res.render('index')
}

exports.trataPost = (req,res) => {
    res.send ("Vi que você preencheu o formulário")
}