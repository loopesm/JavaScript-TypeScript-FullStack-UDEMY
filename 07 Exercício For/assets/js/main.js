// ARRAY QUE CONTEM OS ELEMENTOS
const elementos = [
  { tag: "h2", texto: "H2 - Frase 1" },
  { tag: "h3", texto: "H3 - Frase 2" },
  { tag: "h4", texto: "H4 - Frase 3" },
  { tag: "h5", texto: "H5 - Frase 4" },
];

// SELECIONA O ELEMETENTO QUE CONTEM A CLASSE "CONTAINER NO HTML"
const container = document.querySelector(".container");

// CRIA UM ELEMENTO "DIV" SEM ADICIONAR NO HTML
const div = document.createElement("div");

// LAÇO DE REPETIÇÃO QUE PERCORRE O ARRAY DOS ELEMENTOS
for (let i = 0; i < elementos.length; i++) {
  // ASSOCIAÇÃO POR DESESTRUTURAÇÃO = COLOCA OS ELEMENTOS DO ARRAY EM VARIAVEIS
  let { tag, texto } = elementos[i];

  // CADA REPETIÇÃO DO LAÇO, CRIA-SE UM ELEMENTO QUE A VARIAVEL "TAG" RECEBEU DOS OBJETOS DO ARRAY
  let tagCriada = document.createElement(tag);

  // ESCREVE NA TAG CRIADA, O VALOR QUE A VARIAVEL "TEXTO" RECEBEU DOS OBJETOS DO ARRAY
  tagCriada.innerHTML = texto;
  // OPÇÃO 02 DE REALIZAR A MESMA AÇÃO = tagCriada.innerText = texto;
  // OPÇÃO 03 DE REALIZAR A MESMA AÇÃO = TEXTOCRIADO = DOCUMEENT.CREATTEXTNODE(TEXTO);
  // TAGCRIADA.APPENDCHILD(TEXTOCRIADO)

  // ADICIONA O ELEMENTO CRIADO NA VARIAVEL "TAG CRIADA" DENTRO DA DIV CRIADA NA VARIAVEL "DIV"
  div.appendChild(tagCriada);
}

// ADICIONA A DIV CRIADA NA VARIAVEL "DIV" DENTRO DO ELEMENTO QUE TEM A CLASSE CONTAINER
// E ESSA DIV TRAS OS ELEMENTOS CRIADOS NA VARIAVEL "TAGCRIADA" QUE RECEBEU O VALOR DOS OBJETOS DO ARRAY
container.appendChild(div);
