exports.middlewareGlobal = (req, res, next) => {
  res.locals.errorsRegister = req.flash('errorsRegister');
  res.locals.errorsLogin = req.flash('errorsLogin');
  res.locals.successRegister = req.flash('successRegister');
  res.locals.successLogin = req.flash('successLogin');
  res.locals.errorsContatos = req.flash('errorsContatos');
  res.locals.successContatos = req.flash('successContatos');
  res.locals.user = req.session.user
  next();
};

exports.erroServidor = (req, res, next) => {
  next();
};

exports.checkCsrError = (err, req, res, next) => {
  if(err) {
    return res.render('404')
  }
  next();
}

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
}