//Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador (string), o Código do Cargo do Colaborador (número inteiro entre 1 e 6) e o Salário (número real). A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo Salário reajustado.//

const leia = require ('readline-sync')

let nome = leia.question("\n Digite o seu nome: ")
let codColaborador = leia.questionInt ("\n Digite o codigo do colaborador de 1 a 6: ")

if (codColaborador <1 || codColaborador>7){
    console.log("\nCodigo invalido! ")
    process.exit(0);
}

let salario = leia.questionFloat ("\n Digite o salario do colaborador: ")

switch(codColaborador){
    case 1:
        cargo = "Gerente", percent = 0.1;
        break;
    case 2:
        cargo = "Vendedor", percent = 0.07;
        break;
    case 3:
        cargo = "Supervisor", percent = 0.09;
        break;
    case 4:
        cargo = "Motorista", percent = 0.06;
        break;
    case 5:
        cargo = "Estoquista", percent = 0.05;
        break;
    case 6:
        cargo = "Tecnico de TI", percent = 0.08;
        break;
}

console.log("\n Nome do colaborador: ", nome)
console.log("\n Cargo:", cargo)
console.log("\n, Salário R$", (salario * percent) + salario,".00")
