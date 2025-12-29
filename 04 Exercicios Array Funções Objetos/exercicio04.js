// DECLARADA ESSA FUNÇÃO PARA QUE NÃO PEGUE O ESCOPO GLOBAL DO NAVEGADOR
// EM OUTRAS PALAVRAS, HÁ EVENTOS DO NAVEGADOR OU DE BIBLIOTECAS QUE PODEM
// ALTERAR NOSSO CÓDIGO, E NÃO QUEREMOS ISSO. DESSA FORMA ENVOLVEMOS
// TODO O CÓDIGO EM UMA FUNÇÃO PARA QUE FIQUE PROTEGIDO.

function meuExercicio () {

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // forma 01 = TIRA O EVENTO DE ENVIAR + RECARREGAR A PAGINA DO BOTÃO SUBMIT

    function funcEventDefault(evento){
        evento.preventDefault(); // FORMA 01

        const nome = form.querySelector ('.nome');
        const sobrenome = form.querySelector ('.sobrenome');
        const peso = form.querySelector ('.peso');
        const altura = form.querySelector ('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value}
        ${peso.value} ${altura.value} </p>`

        
    }

    form.addEventListener('submit', funcEventDefault); // FORMA 01



}

meuExercicio();