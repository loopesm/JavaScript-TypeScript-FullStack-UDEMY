function dataAtual() {
  const dataHoje = new Date();

  let diaSemanaAtual = "";
  let mesAtual = "";
  let segundosAtual = "";
  let horaAtual = "";
  let minutosAtual = "";

  switch (dataHoje.getDay()) {
    case 0:
      diaSemanaAtual = "Domingo";
      break;
    case 1:
      diaSemanaAtual = "Segunda-Feira";
      break;
    case 2:
      diaSemanaAtual = "Terça-Feira";
      break;
    case 3:
      diaSemanaAtual = "Quarta-Feira";
      break;
    case 4:
      diaSemanaAtual = "Quinta-Feira";
      break;
    case 5:
      diaSemanaAtual = "Sexta-Feira";
      break;
    case 6:
      diaSemanaAtual = "Sábado";
      break;
    default:
      diaSemanaAtual = "";
  }

  switch (dataHoje.getMonth()) {
    case 0:
      mesAtual = "Janeiro";
      break;
    case 1:
      mesAtual = "Fevereiro";
      break;
    case 2:
      mesAtual = "Março";
      break;
    case 3:
      mesAtual = "Abril";
      break;
    case 4:
      mesAtual = "Maio";
      break;
    case 5:
      mesAtual = "Junho";
      break;
    case 6:
      mesAtual = "Julho";
      break;
    case 7:
      mesAtual = "Agosto";
      break;
    case 8:
      mesAtual = "Setembro";
      break;
    case 9:
      mesAtual = "Outubro";
      break;
    case 10:
      mesAtual = "Novembro";
      break;
    case 11:
      mesAtual = "Dezembro";
      break;
    default:
      mesAtual = "";
  }

  if (dataHoje.getHours() < 10) {
    horaAtual = `0${dataHoje.getHours()}`;
  } else {
    horaAtual = dataHoje.getHours();
  }

  if (dataHoje.getMinutes() < 10) {
    minutosAtual = `0${dataHoje.getMinutes()}`;
  } else {
    minutosAtual = dataHoje.getMinutes();
  }

  if (dataHoje.getSeconds() < 10) {
    segundosAtual = `0${dataHoje.getSeconds()}`;
  } else {
    segundosAtual = dataHoje.getSeconds();
  }

  const paragrafo = document.querySelector(".dateNow");

  paragrafo.innerHTML = `${diaSemanaAtual}, ${dataHoje.getDate()} de ${mesAtual} de ${dataHoje.getFullYear()} - ${horaAtual}:${minutosAtual}:${segundosAtual}`;
}

dataAtual();
