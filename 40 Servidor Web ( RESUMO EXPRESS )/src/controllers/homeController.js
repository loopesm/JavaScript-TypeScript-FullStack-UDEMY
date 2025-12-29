
exports.paginaInicial = (req,res) => {
    res.render('index')
    return
}

exports.trataPost = (req,res) => {
    res.send ("Vi que você preencheu o formulário")
}