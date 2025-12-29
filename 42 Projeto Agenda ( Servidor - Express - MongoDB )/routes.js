const express = require("express");
const route = express.Router();

// CONTROLLERS
const loginController = require("./src/controllers/loginController");
const contatoController = require("./src/controllers/contatoController");
const { erroServidor } = require("./src/middlewares/middleware");

// ROTAS LOGIN
route.get("/", loginController.index);
// route.get("/login/index", loginController.login)
route.post("/login/register", loginController.register);
route.post("/login/login", loginController.login);
route.get("/login/logado", loginController.index);
route.get("/login/logout", loginController.logout);

// ROTAS CONTATO
route.get("/contato", contatoController.index);
route.post("/contato/register", contatoController.register);
route.get("/contato/index/:id", contatoController.editIndex);
route.post("/contato/edit/:id", contatoController.edit);
route.get("/contato/delete/:id", contatoController.delete)
// ROTA DE ERRO

route.use((req, res , next) => {
    res.status(404).render("404");
})

module.exports = route;
