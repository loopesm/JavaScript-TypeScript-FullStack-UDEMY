// EXERCÍCIOS COM NÚMEROS

let num1 = Number(prompt("Digite um número ..."))

let numero = document.getElementById("numero")

let texto = document.getElementById("texto")

let text = document.getElementsByClassName("texto")

numero.innerHTML = num1

texto.innerHTML += (`<p> A Raiz quadrada do seu Número é = ${num1 ** 0.5} </p>`)
texto.innerHTML += (`<p> Seu número é inteiro ? = ${ Number.isInteger(num1)} </p>`)
texto.innerHTML += (`<p> O que foi digitado foi algo que não é um número ? = ${ Number.isNaN(num1)} </p>`)
texto.innerHTML += (`<p> Arredondado para baixo = ${ Math.floor(num1)} </p>`)
texto.innerHTML += (`<p> Arredondado para cima = ${ Math.ceil(num1)} </p>`)
texto.innerHTML += (`<p> Com apenas 2 casas decimais = ${ num1.toFixed(2)} </p>`)
