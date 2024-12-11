//Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string, para organizar a retirada de livros de uma pilha. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
//1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
//2: Listar todos os livros da Pilha
//3: Retirar um livro da pilha 
//0: O programa deve ser finalizado. 
//Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, o programa deverá //informar que a pilha está vazia.

import { Stack } from "./Stack";
const leia = require('readline-sync');
const pilha = new Stack<string>();

let menu: number = -1;

// funcao para verificar menu
function testaMenu(opcao: number): boolean {
    if (opcao < 0 || opcao > 3) {
        console.log("Digite um numero valido!");
        return false;
    }
    return true;
}

console.log('********************************************');
console.log('1. Adicionar um novo livro na pilha');
console.log('2. LListar todos os livros da Pilha');
console.log('3. Retirar um livro da pilha');
console.log('0. Sair');
console.log('********************************************');

while (menu !== 0) { 

    menu = leia.questionInt('Escolha uma opcao: '); 

    if (!testaMenu(menu)) { 
        continue; 
    }

    switch (menu) {
        case 1:
            const cliente = leia.question('Digite o nome do livro: ');
            pilha.push(cliente);
            console.log(`O livro "${cliente}" foi adicionado à pilha.`);
            break;

        case 2:
            if (pilha.isEmpty()) {
                console.log("A pilha está vazia.");
            } else {
                console.log("Livros na pilha:");
                pilha.printStack();
                
            }
            break;

        case 3:
            if (pilha.isEmpty()) {
                console.log("A fila está vazia.");
            } else {
                const cliChamado = pilha.pop();
                console.log(`O livro ${cliChamado} foi retirado.`);
            }
            break;

        case 0:
            console.log("Sair");
            break;

        default:
            console.log("Opção inválida.");
            break;    
        
    }
}
