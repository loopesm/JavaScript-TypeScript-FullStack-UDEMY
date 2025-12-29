function MinhaListaDeTarefas() {
  // CONSTANTES QUE CAPTURAM OS ELEMENTOS DENTRO DO HTML
  const inputNovaTarefa = document.querySelector(".novaTarefa");
  const btnAdicionar = document.querySelector(".btnAdicionar");
  const tarefas = document.querySelector(".tarefas");

  // VARIAVEL QUE VAI RECEBER OS VALORES DIGITADOS NO INPUT
  let textoTarefa = inputNovaTarefa.value;

  // FUNÇÃO QUE CRIA UM ELEMENTO "LI"
  function criaElementoTarefa() {
    const li = document.createElement("li");
    return li;
  }

  // FUNÇÃO QUE ADICIONA O ELEMENTO "LI" CRIADO + BOTÃO DE EXCLUIR DENTRO DA UL "TAREFAS" E ESCREVE DENTRO DO "LI"
  function adicionaTarefa(textoTarefa) {
    const tarefa = criaElementoTarefa();
    tarefas.appendChild(tarefa);
    tarefa.innerHTML = `<span>${textoTarefa}</span>`;
    criaBtnExcluir(tarefa);
    salvarTarefa();
  }

  // FUNÇÃO QUE CRIA O BOTÃO DE ESCLUIR EM CADA "LI"
  function criaBtnExcluir(tarefa) {
    tarefa.innerHTML += " ";
    const btnExcluir = document.createElement("button");
    btnExcluir.classList.add("btnExcluir");
    btnExcluir.classList.add("fa-solid");
    btnExcluir.classList.add("fa-xmark");
    tarefa.appendChild(btnExcluir);
  }

  // FUNÇÃO QUE LIMPA O INPUT E COLOCA UM "FOCUS"
  function limpaInput() {
    inputNovaTarefa.value = "";
    inputNovaTarefa.focus();
  }

  // CAPTURA O EVENTO DE PRESSIONAR TECLA ENTER ( KEYCODE = 13 )
  inputNovaTarefa.addEventListener("keypress", function (pressionaTecla) {
    if (pressionaTecla.keyCode === 13) {
      if (inputNovaTarefa.value == "") return;
      adicionaTarefa(inputNovaTarefa.value);
      limpaInput();
    }
  });

  // CAPTURA O EVENTO DE CLICAR NO BOTÃO "BTNADICIONAR"
  btnAdicionar.addEventListener("click", function () {
    if (inputNovaTarefa.value == "") return;
    adicionaTarefa(inputNovaTarefa.value);
    limpaInput();
  });

  // CAPTURA O EVENTO DE CLICK NO DOCUMETO, BUSCANDO OS BOTÕES COM CLASSE "BTNEXCLUIR" E REMOVE OS "PARENTES" DESSE BOTÃO, QUE NO CASO SÃO OS "LI"
  document.addEventListener("click", function (clicado) {
    const click = clicado.target;

    if (click.classList.contains("btnExcluir")) {
      click.parentElement.remove();
    }
    salvarTarefa();
    inputNovaTarefa.value = "";
    inputNovaTarefa.focus();
  });

  // FUNÇÃO QUE PEGA O TEXTO DOS "SPANS" QUE ESTÃO DENTRO DO ELEMENTO "TAREFAS" E SALVA EM UM "ARRAY"
  function salvarTarefa() {
    const textoTarefas = tarefas.querySelectorAll("span");
    const arrayTarefas = [];

    for (let tarefa of textoTarefas) {
      let textoTarefa = tarefa.innerText;
      arrayTarefas.push(textoTarefa);
    }

    // CRIA UM JSON E SALVA NO "LOCAL STORAGE" DO NAVEGADOR
    const tarefasJSON = JSON.stringify(arrayTarefas);
    localStorage.setItem("MinhasTarefas", tarefasJSON);
  }

  // FUNÇÃO QUE PEGA OS DADOS SALVOS DO JSON NO "LOCAL STORAGE" DO NAVEGADOR
  function TarefasSalvas() {
    const tarefas = localStorage.getItem("MinhasTarefas");
    const arrayTarefas = JSON.parse(tarefas);

    // SALVA OS DADOS SALVOS DO JSON EM UM ARRAY "ARRAY TAREFAS"
    for (let tarefa of arrayTarefas) {
      adicionaTarefa(tarefa);
    }
  }

  TarefasSalvas();
}

MinhaListaDeTarefas();
