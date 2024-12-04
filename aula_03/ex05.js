//Com base na tabela abaixo, escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro). A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.//

const leia = require ('readline-sync')

console.log('\n|**codigo ** Produto********** Preço *********')
console.log('\n|-- 1 -- ** Cachorro quente ** 10.00 *********')
console.log('\n|-- 2 -- ** X- Salada ******** 15.00 *********')
console.log('\n|-- 3 -- ** X- Bacon ********* 18.00 *********')
console.log('\n|-- 4 -- ** Bauru  *********** 12.00 *********')
console.log('\n|-- 5 -- ** Refrigerante ****** 8.00 *********')
console.log('\n|-- 6 -- ** Suco de laranja ** 13.00 *********\n')

let codProduto = leia.questionInt(" Digite o codigo do produto de 1 a 6 : ");

switch(codProduto){
    case 1:
        valor = 10.00, produto ="Cachorro quente";
        break;
    case 2:
        valor = 15.00, produto = "X- salada";
        break;
    case 3:
        valor = 18.00, produto = "X- Bacon";
        break;
    case 4:
        valor = 12.00, produto ="Bauru";
        break;
    case 5:
        valor = 8.00, produto = "Refrigerante";
        break;
    case 6:
        valor = 13.00, produto = "Suco de laranja";
        break;sim
    default:
        console.log(" Codigo invalido!")
        process.exit(0);
}

console.log(`\n O(a) ${produto} custa  R$${valor}.00`);


