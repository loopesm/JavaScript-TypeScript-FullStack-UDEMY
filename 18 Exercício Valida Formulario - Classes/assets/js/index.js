// CRIAÇÃO DA CLASSE PARA VALIDAÇÃO DO FORMULARIO
class ValidaFormulario {
  constructor() {
    // SELECIONAR O FORMULARIO PELA CLASSE DO FORM HTML
    this.formulario = document.querySelector(".meuForm");

    // CHAMADA DE MÉTODOS CRIADOS
    this.eventos();
  }

  // METODO DE EVENTOS
  eventos() {
    // PEGAR O EVENTO DE SUBMIT DO BOTÃO
    this.formulario.addEventListener("submit", (e) => {
      // ARROW FUNCTION QUE CHAMA O MMETODO HANDLE SUBMIT
      this.handleSubmit(e);
    });
  }

  // METODO QUE FAZ COM QUE O FORMULARIO NÃO SEJA ENVIADO ANTES DA VALIDAÇÃO DOS DADOS
  handleSubmit(e) {
    // PREVENTDEFAULT QUE FAZ O FORMULARIO NÃO SER ENVIADO
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasSaoValidas();

    if (camposValidos && senhasValidas) {
      alert("Formulario Enviado");
      this.formulario.submit();
    }
  }

  senhasSaoValidas() {
    let valid = true;

    const senha = this.formulario.querySelector(".senha");
    const repetirSenha = this.formulario.querySelector(".repetirSenha");

    if (senha.value !== repetirSenha.value) {
      valid = false;
      this.criaErro(senha, "Campo Senha e Repetir Senha precisam ser iguais.");
      this.criaErro(
        repetirSenha,
        "Campo Senha e Repetir Senha precisam ser iguais."
      );
    }

    if (senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.criaErro(senha, "Senha precisa ter entre 6 e 12 caracteres.");
    }

    return valid;
  }

  camposSaoValidos() {
    let valid = true;

    for (let errorText of this.formulario.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let campo of this.formulario.querySelectorAll(".validar")) {
      const label = campo.previousElementSibling.innerText;

      if (!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode estar vazio.`);
        valid = false;
      }

      if (campo.classList.contains("cpf")) {
        if (!this.validaCPF(campo)) valid = false;
      }

      if (campo.classList.contains("usuario")) {
        if (!this.validaUsuario(campo)) valid = false;
      }
    }

    return valid;
  }

  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;
    if (usuario.length < 6 || usuario.length > 12) {
      this.criaErro(campo, "Usuário precisa ter entre 6 e 12 caracteres");
      valid = false;
    }
    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, "Usuário precisa conter Letras ou Numeros");
      valid = false;
    }
    return valid;
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if (!cpf.valida()) {
      this.criaErro(campo, "CPF Inválido.");
      return false;
    }

    return true;
  }

  criaErro(campo, mensagem) {
    const div = document.createElement("div");
    div.innerHTML = mensagem;
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }
}

// CHAMADA DA CLASSE CRIADA
const valida = new ValidaFormulario();
