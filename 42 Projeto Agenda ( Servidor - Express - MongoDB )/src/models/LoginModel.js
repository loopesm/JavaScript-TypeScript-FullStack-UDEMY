const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs')

const LoginSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errorsRegister = [];
    this.errorsLogin = [];
    this.user = null
  }

  async login(){

    this.validaLogin()

    if (this.errorsLogin.length > 0 ) {
      return
    }

    this.user = await LoginModel.findOne({email: this.body.email})

    if(!this.user) { 
      this.errorsLogin.push("Usuário não existe")
      return
    }

    if(!bcryptjs.compareSync(this.body.password, this.user.password)) {
      this.errorsLogin.push("Senha Inválida")
      this.user = null
      return
    }
  
  }
    

  async register(){
    this.valida()
    if (this.errorsRegister.length > 0 ) {
      return
    }

    await this.userExists()

    if (this.errorsRegister.length > 0 ) {
      return
    }

    const salt = bcryptjs.genSaltSync();
    this.body.password = bcryptjs.hashSync(this.body.password, salt)

    this.user = await LoginModel.create(this.body)
    
  }

  valida(){
    this.cleanUp();
    // E-mail precisa ser válida
    if(!validator.isEmail(this.body.email) && validator.isEmail(this.body.email) == ''  ) {
      this.errorsRegister.push('Email inválido')
    }

    // A senha precisa ter entre 8 e 25 caracteres
    if(this.body.password.length < 8 || this.body.password.length > 25 && this.body.password == '')  {
      this.errorsRegister.push('A senha precisa ter entre 8 e 25 caracteres')
    }
  }

  validaLogin(){
    this.cleanUp();
    // E-mail precisa ser válida
    if(!validator.isEmail(this.body.email) && validator.isEmail(this.body.email) == ''  ) {
      this.errorsLogin.push('Email inválido')
    }

    // A senha precisa ter entre 8 e 25 caracteres
    if(this.body.password.length < 8 || this.body.password.length > 25 && this.body.password == '')  {
      this.errorsLogin.push('A senha precisa ter entre 8 e 25 caracteres')
    }
  }

  async userExists() {
    this.user = await LoginModel.findOne({email: this.body.email})

    if(this.user) this.errorsRegister.push('Usuário já existe.')

  }

  cleanUp() {
    for(const key in this.body ){
      if(typeof this.body[key] !== "string") {
        this.body[key] = '';
      }
    }

    this.body = {
      name: this.body.name,
      email: this.body.email,
      password: this.body.password
    }
  }
}

module.exports = Login;
