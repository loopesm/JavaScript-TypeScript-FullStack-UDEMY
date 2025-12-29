//           CRIAR   LER   ATUALIZAR  APAGAR     
// CRUD  ->  CREATE  READ  UPDATE     DELETE
//           POST    GET   PUT        DELETE

const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send (`
        <form action="/" method="POST">
        Nome do Cliente: <input type="text" name="nome" >
        <button>Enviar Formulário</button>
        </form>
    `)
})

app.get('/teste/:idUsuarios?', (req,res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.params.idUsuarios)
})

app.post('/', (req, res) =>{
    console.log(req.body)
    res.send('Recebi o Formulario')
})



app.listen(3000, () => {
    console.log ("Acessar http://localhost:3000")
    console.log ("Servidor executando na porta 3000")
})