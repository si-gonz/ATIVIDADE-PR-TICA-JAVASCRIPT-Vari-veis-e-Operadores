//Elabore um algoritmo que leia o Salário Bruto, o Adicional Noturno, as Horas Extras e os Descontos de um Colaborador e exiba na tela o Salário Líquido. Veja o exemplo abaixo://

const leia = require ('readline-sync')

let salBruto, adNoturno, horasExtra, descontos, saLiquido

salBruto = leia.questionFloat (" Digite o salario bruto:  ")
adNoturno = leia.questionFloat (" Digite o adicional noturno:  ")
horasExtra = leia.questionFloat (" Digite as horas extras:  ")
descontos = leia.questionFloat (" Digite os descontos:  ")

saLiquido = salBruto + adNoturno + (horasExtra*5) - descontos

console.log (" O salario liquido é: ", saLiquido)
