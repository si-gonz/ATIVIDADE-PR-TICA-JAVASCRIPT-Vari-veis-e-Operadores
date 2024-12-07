//Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 anos e o total de pessoas cuja idade, seja maior que 50 anos. A leitura dos dados deve ser finalizada ao digitar uma idade negativa. Veja o exemplo abaixo://

const leia = require('readline-sync');

let menos21 = 0;
let mais50 = 0;
let validacao = "s"; 

while (true) {
    let idade = leia.questionInt("\nDigite a idade: ");
  
    if (idade < 0) {
        console.log("\nDigite uma idade válida!!!");
        continue; 
    }
   
    if (idade < 21) {
        menos21++;
    } else if (idade > 50) {
        mais50++;
    }

    validacao = leia.question("\nDeseja continuar? Digite 's' para SIM ou 'n' para NAO: ").toLowerCase();

    if (validacao === "n") {
        break; 
    } else if (validacao === "s") {
        continue;
    }
}

console.log("\nTotal de pessoas com menos de 21 anos é:", menos21);
console.log("\nTotal de pessoas com mais de 50 anos é:", mais50);







