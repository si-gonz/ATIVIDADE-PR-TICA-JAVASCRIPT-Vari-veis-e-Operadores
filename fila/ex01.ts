//Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string, para organizar uma fila por ordem de chegada dos Clientes de um Banco. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3://
//1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
//2: Listar todos os Clientes na fila
//3: Chamar (retirar) uma pessoa da fila 
//0: O programa deve ser finalizado. 
//Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila.

import { Queue } from "./Queue";
const leia = require('readline-sync');

const fila = new Queue<string>();
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
console.log('1. Adicionar um novo Cliente na fila');
console.log('2. Listar todos os Clientes na fila');
console.log('3. Chamar uma pessoa da fila');
console.log('0. Sair');
console.log('********************************************');


while (menu !== 0) { 

    menu = leia.questionInt('Escolha uma opcao: '); 

    if (!testaMenu(menu)) { 
        continue; 
    }

    switch (menu) {
        case 1:
            const cliente = leia.question('Digite o nome do cliente: ');
            fila.enqueue(cliente);
            console.log(`Cliente "${cliente}" foi adicionado à fila.`);
            break;

        case 2:
            if (fila.isEmpty()) {
                console.log("A fila está vazia.");
            } else {
                console.log("Clientes na fila:");
                fila.printQueue();
            }
            break;

        case 3:
            if (fila.isEmpty()) {
                console.log("A fila está vazia.");
            } else {
                const cliChamado = fila.dequeue();
                console.log(`Cliente ${cliChamado} foi chamado.`);
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


