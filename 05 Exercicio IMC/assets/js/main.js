function CalculoIMC () {
/*----------------------------------
Peso normal de uma criança = 4kg
Pessoa mais pesada = 394kg
Altura normal de uma criança = 0,5m
Ser humano mais alto = 2,45m

Valores para Calculos
kg: >= 4 || <=394
altura: >= 0,5 || 2,45
-----------------------------------*/

// INICIO CAPTURA DO EVENTO DE SUBMIT DO BOTÃO
const form = document.querySelector('#form');

form.addEventListener('submit', function(evento){
    evento.preventDefault();
    
    // PEGAR OA VALORES DOS INPUT QUANDO CLICA NO BOTÃO

    const inputPeso = evento.target.querySelector('.peso')
    const inputAltura = evento.target.querySelector('.altura')

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso || peso < 4 || peso > 394) { // SE PESO FOR INVALIDO RETORNA FALSO
        resultadoIMC('Peso Inválido',false);
        return;
    }

    if (!altura || altura < 0.5 || altura > 2.45 ) { // SE ALTURA FOR INVALIDA RETORNA FALSO
        resultadoIMC('Altura Inválida',false);
        return;
    }

    const imc = calcIMC(peso,altura);
    const indice = calcIndice(imc);

    const msgResultado = `Seu IMC é ${imc} - ${indice}.`;

    resultadoIMC(msgResultado,true);

});
// FIM CAPTURA DO EVENTO

// INICIO CRIAR ELEMENTO NO HTML

function criaElementoP(){

    const p = document.createElement('p'); // CRIA O ELEMENTO "<P>"

    p.classList.add('p-resultado'); // CRIA UMA CLASSE NO ELEMENTO "<P>""

    return p; // RETORNA O ELEMENTO "<P>"

}

// FIM CRIAR ELEMENTO NO HTML

//  INICIO INSERIR ELEMENTO NO HTML
function resultadoIMC(msg, isValid){
    const resultado = document.querySelector('.resultado'); // SELECIONA A DIV COM CLASSE "RESULTADO"

    resultado.innerHTML = ""; // ZERA O CONTEÚDO DO ELEMENTO

    const p = criaElementoP(); // PEGA O VALOR DE "<P>" RETORNAR PELA FUNÇÃO "CRIA ELEMENTO P"

    if (isValid) {
        p.classList.add('paragrafoVermelho')
    } else {
        p.classList.add('paragrafoVerde')
    }

    resultado.appendChild(p); // INSERE O VALOR DE P NA DIV COM  CLASSE "RESULTADO"

    p.innerHTML = msg ; // ESCREVER DENTRO DO PARAGRAFO

}
// FIM INSERIR ELMENTO NO HTML

// INICIO CALCULO DO IMC 

function calcIMC(peso, altura){
    const imc = ( peso / ( altura * altura ) );
    return imc.toFixed(2);
}

// FIM DO CALCULO DO IMC

// INICIO CALC QUAL INDICE DO IMC

function calcIndice(imc){
    const nivel = ['Abaixo do Peso','Peso Ideal',
    'Levemente Acima do Peso',
    'Obesidade Grau I',
    'Obesidade Grau II ( Severa )',
    'Obesidade Grau III ( Morbida )']

    if (imc >= 39.9){
        return nivel[5];
    }
    if (imc >= 34.9){
        return nivel[4];
    }
    if (imc >= 29.9){
        return nivel[3];
    }
    if (imc >= 24.9){
        return nivel[2];
    }
    if (imc >= 18.5){
        return nivel[1];
    }
    if (imc < 18.5){
        return nivel[0];
    }

}

// INICIO CALC QUAL INDICE DO IMC

}

CalculoIMC();