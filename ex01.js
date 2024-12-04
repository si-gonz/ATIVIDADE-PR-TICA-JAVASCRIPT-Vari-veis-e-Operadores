const leia = require ('readline-sync')

// Definição Variáveis
let salario, abono, novoSalario

salario = leia.questionFloat("\n Digite o salario: ")
abono = leia.questionFloat(" \n Digite o abono: ")

novoSalario = salario + abono
console.log("\n Novo salario: ", novoSalario)