// Do while precisa que seja repetido uma unica vez do while, varias vezes ate satisfazer a condição while//
const leia = require ('readline-sync')

let contador = 1;
let numero = leia.questionInt ("Digite um numero: ")

do {
    console.log(`${numero} x ${contador}= ${numero * contador}`);
    contador ++;
}while (contador <=10)
    