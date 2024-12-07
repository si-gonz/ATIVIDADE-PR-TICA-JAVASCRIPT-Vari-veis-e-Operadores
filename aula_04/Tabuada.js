// quando voce sabe quantas vezes voce quer que repita, use o laço for//

const leia = require ('readline-sync')

let numero = leia.questionInt(" Digite um numero: ");

for (i=1; i<=10; i++){
    let tabuada = numero* i;
    console.log(`${numero} X ${i} = ${tabuada}`)
}