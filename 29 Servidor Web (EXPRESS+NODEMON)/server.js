//           CRIAR   LER   ATUALIZAR  APAGAR     
// CRUD  ->  CREATE  READ  UPDATE     DELETE
//           POST    GET   PUT        DELETE

const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send (`
        <form action="/" method="POST">
        Nome do Cliente: <input type="text" name="nome" >
        <button>Enviar Formulário</button>
        </form>
    `)
})

app.post('/', (req, res) =>{
    res.send('Recebi o Formulario')
})

app.listen(3000, () => {
    console.log ("Acessar http://localhost:3000")
    console.log ("Servidor executando na porta 3000")
})