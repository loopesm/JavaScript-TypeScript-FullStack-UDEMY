function meuTimer() {
  // FUNÇÃO QUE PEGA A "HORA" 0 DO UNIX ( 1970 )
  function segundosTimer(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", { hour12: false, timeZone: "GMT" });
  }

  // SELECIONA OS ELEMENTOS DA PÁGINA QUE VAMOS TRABALHAR
  const meuContador = document.querySelector(".meuContador");
  const botIniciar = document.querySelector(".iniciar");
  const botPausar = document.querySelector(".pausar");
  const botZerar = document.querySelector(".zerar");
  let segundos = 0;
  let timer = 0;

  // FUNÇÃO QUE ACRESCENTA DE 1 E 1 UM SEGUNDO NO HTML
  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      meuContador.innerHTML = segundosTimer(segundos);
    }, 1000);
  }

  // SELECIOA O BOTÃO INICIAR E EXECUTA A FUNÇÃO "INICIA RELOGIO"
  botIniciar.addEventListener("click", function () {
    meuContador.classList = "meuContador";
    clearInterval(timer); // PRECISA ACRESCENTAR PARA NÃO CRIAR VARIOS TIMERS OCULTOS
    iniciaRelogio();
  });

  // SELECIOA O BOTÃO PAUSAR E EXECUTA A FUNÇÃO "INICIA RELOGIO"
  botPausar.addEventListener("click", function () {
    meuContador.classList = "red";
    clearInterval(timer); // PRECISA ACRESCENTAR PARA NÃO CRIAR VARIOS TIMERS OCULTOS
  });

  // SELECIOA O BOTÃO INICIAR E EXECUTA A FUNÇÃO "INICIA RELOGIO"
  botZerar.addEventListener("click", function () {
    meuContador.classList = "meuContador";
    clearInterval(timer); // PRECISA ACRESCENTAR PARA NÃO CRIAR VARIOS TIMERS OCULTOS
    meuContador.innerHTML = '00:00:00'; // ZERA O CONTADOR NO FRONT-END
    segundos = 0; // ZERA O CONTADOR NO BACK-END
  });
}

meuTimer();
