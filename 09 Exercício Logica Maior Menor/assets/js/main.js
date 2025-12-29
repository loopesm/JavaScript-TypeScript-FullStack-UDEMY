function exeMaiorMenor() {
  const form = document.querySelector("#formulario");

  // PEGA O EVENTO DE CLICAR DO BOTÃO SUBMIT
  form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    // SELECIONA OS VALORES DOS INPUTS
    const inputNumero1 = evento.target.querySelector(".numero1");
    const inputNumero2 = evento.target.querySelector(".numero2");

    // GRAVA OS VALORES DOS INPUTS EM VARIAVEIS
    const numero1 = Number(inputNumero1.value);
    const numero2 = Number(inputNumero2.value);

    // CRIA A VARIAVEL QUE VAI RECEBER A MENSAGEM
    let mensagemRestultado;

    // VERIFICA SE UM DOS VALORES É MAIOR, SÃO IGUAIS OU INVALIDOS
    if (numero1 < numero2) {
      mensagemRestultado = `O número ${numero2} é maior que ${numero1}.`;
    } else if (numero1 > numero2) {
      mensagemRestultado = `O número ${numero1} é maior que ${numero2}.`;
    } else if (numero1 === numero2 && numero1 === 0 && numero2 === 0 ) {
      mensagemRestultado = `Os números são iguais, digite novamente`;
    } else {
      mensagemRestultado = `Os dois valores devem ser números, digite novamante`;
    }

    // CRIA O ELEMENTO "P"
    const p = document.createElement("p");

    // SELECIONA A DIV COM CLASSE "RESULTADO"
    const resultado = document.querySelector(".resultado"); // SELECIONA A DIV COM CLASSE "RESULTADO"

    // APAGA O CONTEUDO DA DIV QUANDO O BOTÃO FOR CLICADO
    resultado.innerHTML = ""; // ZERA O CONTEÚDO DO ELEMENTO

    // ADICIONA O ELEMENTO "P" QUE FOI CRIADO, NA DIV RESULTADO
    resultado.appendChild(p); // INSERE O VALOR DE P NA DIV COM  CLASSE "RESULTADO"

   // SELECIONA O ELEMENTO "P" DA DIV RESULTADO E ESCREVE A MENSAGEM NO ELEMENTO.  
    p.innerHTML = mensagemRestultado;
  });
}

exeMaiorMenor();
