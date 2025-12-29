require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const csurf = require('csurf');

mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit("Conectado");
  })
  .catch((e) => console.log(e));

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const routes = require("./routes");
const path = require("path");
const { middlewareGlobal, checkCsrError, csrfMiddleware, erroServidor } = require("./src/middlewares/middleware");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

const mySecretKeySession = process.env.sessionSecret

const sessionOptions = session({
  secret: mySecretKeySession,
  store: new MongoStore({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

// **** CSRF - CONFIGURAÇÃO ****

// Middleware para parsear cookies
app.use(cookieParser());

// Configuração do csurf
const csrfProtection = csurf({ cookie: true });
app.use(csrfProtection);

// Configurações adicionais, como body-parser e rotas
app.use(express.urlencoded({ extended: true })); // Para parsing de formulários
app.use(express.json());

// **** CSRF -  FIM DA CONFIGURAÇÃO ****


// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrError)
app.use(csrfMiddleware)
app.use(erroServidor);
app.use(routes);

app.on("Conectado", () => {
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
  });
});
