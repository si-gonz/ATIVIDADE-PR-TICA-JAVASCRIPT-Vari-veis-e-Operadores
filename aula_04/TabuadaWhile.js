const leia = require ('readline-sync')

let contador = 1;
let numero = leia.questionInt ("Digite um numero: ")

while (contador <=10){
    console.log(`${numero} x ${contador}= ${numero * contador}`);
    contador ++;
}