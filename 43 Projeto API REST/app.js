const express = require('express');
const app = express();

const variavelInutil = 'eu não sirvo para nada';

app.get('/', (req, res) => {
  console.log('Minha API está rodando!');
  res.send({ mensagem: 'Olá mundo' });
});

app.listen(3000);
