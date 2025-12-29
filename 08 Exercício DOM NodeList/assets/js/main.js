// SELECIONA A DIV QUE CONTEM CLASSE "PARAGRAFOS"
const paragrafos = document.querySelector(".paragrafos");

// SELECIONA TODOS OS ELEMENTOS "P" DENTRO DO ELEMENTO "PARAGRAFOS"
const pTexto = paragrafos.querySelectorAll("p");

// SELECIONA O ESTILO COMPUTADO PELO BROWSER
const estilosBody = getComputedStyle(document.body);

// SELECIONA A COR DO BACKGROUND DOO ELEMENTO BODY
const backgroundBody = estilosBody.backgroundColor;

// MUDA COR DO BACKGROUND DOS ELEMENTOS "P" E A COR DA LETRA
for (let p of pTexto) {
  p.style.backgroundColor = backgroundBody;
  p.style.color = "red";
  p.style.fontWeight = "bold";
}
