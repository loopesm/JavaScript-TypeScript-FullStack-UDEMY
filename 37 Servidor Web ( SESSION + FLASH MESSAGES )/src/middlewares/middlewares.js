module.exports = (req, res, next) => {
    console.log()
    console.log('Passei no Middlewares GLOBAL')
    console.log()
    next()
}