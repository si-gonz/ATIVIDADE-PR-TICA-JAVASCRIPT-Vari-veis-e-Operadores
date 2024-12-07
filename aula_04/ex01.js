// Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número deve ser menor do que o segundo número. Caso contrário, deve ser exibida uma mensagem na tela informando que o intervalo é inválido e sair do programa. //

const leia = require('readline-sync')

let n1 = leia.questionInt("\n Digite o numero 1: ")
let n2 = leia.questionInt("\n Digite o numero 2: ")
let multiplos = [];

while (n1 >= n2) {
    console.log("\nIntervalo inválido! O número 1 deve ser menor que o número 2.");
    n1 = leia.questionInt("\nDigite novamente o numero 1: ");
    n2 = leia.questionInt("\nDigite novamente o numero 2: ");
}

for (let i = n1; i <= n2; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        multiplos.push(i);
    }
}

console.log(multiplos)
