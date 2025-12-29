module.exports = (req, res, next) => {
    console.log()
    console.log('Passei no Middlewares GLOBAL')
    console.log()
    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if ( err && 'EBADCSRFTOKEN' === err.code ){
        return res.render('404')
    }
}