/* EXERCICIO COM VARIAVEIS
* Faxer o valor da Variavel A apontar para B
* Fazer o valor da Variavel B apontar para C
* Fazer o valor da Variavel C apontar para A 
*
*/

let varA = "A"; // Novo valor = B
let varB = "B"; // Novo valor = C
let varC = "C"; // Novo valor = A

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);