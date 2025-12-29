const Login = require('../models/LoginModel')
const Contatos = require('../models/ContatoModel')

exports.index = async (req, res) => {
  // **** TESTE SE A SESSÃO ESTÁ SENDO SALVA NO BANCO DE DADOS ****
  // req.session.usuario = { nome: "Moises", logado: true }

  // **** TESTE DE RETORNO DA SEÇÃO SALVA NO BANCO DE DADOS ****
  // console.log(req.session)

  // **** FLASH MESSAGES ****
  // req.flash('info', 'Informação sobre a requisição')
  // req.flash('success', "Sucesso na requisição")
  // req.flash('error', 'Erro na requisição')

  // console.log(req.flash('erro'))  
  if(req.session.user){
    console.log(req.session.user)
    const contatos = await new Contatos().buscaContatos(req.session.user._id);
    const contatosFiltrados = contatos.filter(contato => contato.userId === req.session.user._id);

    res.render('logado', { contatos: contatosFiltrados })
    console.log(contatos)
  } else {
    res.render('login', {csrfToken: req.csrfToken()})
  }
};

exports.logado = (req,res) => {
  if(req.session.user){
    res.render('logado')
    return
  }
  else {
    res.render('404')
  }
}

exports.register = async (req, res) => {

  try {
    const login = new Login(req.body)
    await login.register()
  
    if(login.errorsRegister.length > 0 ) {
      req.flash('errorsRegister', login.errorsRegister)
      req.session.save(function(){
      //res.redirect('back')
      res.location('/');
      res.status(302).send();
      return
      })
      return
    }
  
      req.flash('successRegister', 'Seu usuário foi criado com sucesso!')
      req.session.save(function(){
      //res.redirect('back')
      res.location('/');
      res.status(302).send();
      return
      })
    
  } catch (error) {
    console.log(error)
    res.render('404')
  }

};

exports.login = async (req, res) => {

  try {
    const login = new Login(req.body)
    await login.login()
  
    if(login.errorsLogin.length > 0 ) {
      req.flash('errorsLogin', login.errorsLogin)
      req.session.save(function(){
      //res.redirect('back')
      res.location('/');
      res.status(302).send();
      return
      })
      return
    }
  
      req.flash('successLogin', 'Acesso ao sistema liberado!')
      req.session.user = login.user
      req.session.save(function(){
      //res.redirect('back')
      res.location('/login/logado');
      res.status(302).send();
      return
      })
    
  } catch (error) {
    console.log(error)
    res.render('404')
  }

};

exports.logout = function(req,res) {
  req.session.destroy()
  res.location('/');
  res.status(302).send();
  return
}