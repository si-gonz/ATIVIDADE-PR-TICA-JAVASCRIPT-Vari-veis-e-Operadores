//Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.//

const leia = require ('readline-sync')


let A = leia.questionInt (" Digite o valor de A: ")
let B = leia.questionInt (" Digite o valor de B: ")
let C = leia.questionInt (" Digite o valor de C: ")

A+B > C 
? console.log( " A soma de A+B é maior que C ")
: console.log( " C é maior que a soma A + B ")
