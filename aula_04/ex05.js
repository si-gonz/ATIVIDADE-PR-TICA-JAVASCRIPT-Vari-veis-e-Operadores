//Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. Ao final, mostre na tela a soma de todos os números digitados, que sejam positivos. Veja o exemplo abaixo://

const leia = require("readline-sync");

let numero; 
let soma = 0; 

do {
    
    numero = leia.questionInt("\nDigite um numero inteiro: ");
    
    if (numero > 0) {
        soma = numero + soma;
    }
} while (numero !== 0); 

console.log("\nA soma de todos os numeros positivos é:", soma);
