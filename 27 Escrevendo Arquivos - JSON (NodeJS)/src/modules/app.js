const path = require("path");
const caminhoArquivo = path.resolve(__dirname,'teste.json');
const escrever = require('./escrever')
const ler = require('./ler')

// ESCREVER //

/* const pessoas = [
    { nome: 'Joao'},
    { nome: 'Maria'},
    { nome: 'Tereza'},
    { nome: 'Paulo'},

]

const json = JSON.stringify(pessoas, "", 2)

escrever(caminhoArquivo,json) */

// LER //

async function lerArquivo (caminho){
    const dados = await ler(caminho)
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados)
    dados.forEach(element =>
        console.log(element));
    }

lerArquivo(caminhoArquivo)