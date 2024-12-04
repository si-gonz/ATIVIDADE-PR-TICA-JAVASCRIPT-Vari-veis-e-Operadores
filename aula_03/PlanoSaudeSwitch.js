const leia = require ('readline-sync')

let nome = leia.question(" Digite o seu nome: ");


console.log('\n********Faixas Etarias********')
console.log('\n 1 - idade entre 0 e 10 anos ')
console.log('\n 2 - idade entre 11 e 29 anos ')
console.log('\n 3 - idade entre 30 e 45 anos ')
console.log('\n 4 - idade entre 46 e 59 anos ')
console.log('\n 5 - idade entre 60 e 65 anos ')
console.log('\n 6 - idade acima de 66 anos ')

let faixaEtaria = leia.questionInt("\n Digite a sua faixa etaria: ");
let valor; 

switch(faixaEtaria){
    case 1:
        valor = 100.00;
        break;
    case 2:
        valor = 200.00;
        break;
    case 3:
        valor = 300.00;
        break;
    case 4:
        valor = 500.00;
        break;
    case 5:
        valor = 600.00;
        break;
    case 6:
        valor = 1000.00;
        break;sim
    default:
        console.log(" Faixa Etária inválida!")
        process.exit(0);
}

console.log(`\n O valor do Plano de Saúde do(a) ${nome} é de R$${valor}`);





