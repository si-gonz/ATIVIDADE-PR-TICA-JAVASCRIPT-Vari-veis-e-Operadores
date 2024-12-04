//Elabore um algoritmo que leia 4 notas (números reais) de um participante e exiba na tela a média final do participante. Veja o exemplo abaixo://

const leia = require ('readline-sync')
let n1, n2, n3, n4, media 

n1 = leia.questionFloat(" Digite a nota 1: ")
n2 = leia.questionFloat(" Digite a nota 2: ")
n3 = leia.questionFloat(" Digite a nota 3: ")
n4 = leia.questionFloat(" Digite a nota 4: ")

media = (n1 +n2+n3+n4)/4

console.log(" A média é : ", media)