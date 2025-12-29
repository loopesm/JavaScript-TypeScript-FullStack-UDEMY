// FUNÇÃO CONSTRUTORA PRINCIAPAL
function Calculadora() {
  // SELECIONA O DISPLAY = ELEMENTO DE INPUT
  this.display = document.querySelector(".meuDisplay");

  // A FUNÇÃO "INICIA" FAZ A CHAMADA PARA A FUNÇÃO "CAPTURA DE CLIQUES"
  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
    this.display.focus();
  };

  // FUNÇÃO "CAPTURA CLIQUES"
  this.capturaCliques = () => {
    // CAPTURA O EVENTO DE CLIQUE NOS ELEMENTOS
    document.addEventListener("click", (evento) => {
      // ADICIONA EM UMA CONSTANTE O ELEMENTO CLICADO
      const elementoClicado = evento.target;
      // SE A CLASSE DO ELEMENTO FOR "BTN-NUMERO" ELA CHAMA O MÉTODO "ADDNUMDISPLAY"
      if (elementoClicado.classList.contains("btn-numero"))
        this.addNumDisplay(elementoClicado);
      // SE A CLASSE DO ELEMENTO FOR "BTN-CLEAR"
      if (elementoClicado.classList.contains("btn-clear")) this.clearDisplay();
      // SE A CLASSE DO ELEMENTO FOR "BTN-DEL"
      if (elementoClicado.classList.contains("btn-del")) this.delDisplay();
      // SE A CLASSE DO ELEMENTO FOR "BTN-IGUAL" ELA REALIZA A CONTA
      if (elementoClicado.classList.contains("btn-igual"))
        this.igualResultado();
    });
  };

  // FUNÇÃO QUE ADICIONA UM CARACTERE NO INPUT
  this.addNumDisplay = (elementoClicado) => {
    // PEGA A CONSTANTE "ELEMENTO CLICADO" E ESCREVE NO INPUT NO HTML
    this.display.value += elementoClicado.innerText;
    this.display.focus();
  };

  this.clearDisplay = () => {
    // ATRIBUI UMA STRING VAZIA AO INPUT
    this.display.value = "";
    this.display.focus();
  };

  this.delDisplay = () => {
    // EXCLUI O ULTIMO CARATERE DA STRING DO INPUT
    this.display.value = this.display.value.slice(0, -1);
    this.display.focus();
  };

  this.igualResultado = () => {
    // VERIFICA SE CONSEGUE FAZER CONTA COM O VALOR DO INPUT
    try {
      const conta = eval(this.display.value);

      if (!conta) {
        alert("Conta Inválida");
        this.display.value = "";
        this.display.focus();
        return;
      }
      this.display.value = conta;
      this.display.focus();
    } catch (e) {
      alert("Conta Inválida");
      this.display.value = "";
      this.display.focus();
      return;
    }
  };

  // CAPTURA A TECLA DE ENTER SENDO PRESSIONADA
  this.capturaEnter = () => {
    this.display.addEventListener("keypress", clique => {
      if (clique.keyCode === 13){
        this.igualResultado();
      }
    });
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
