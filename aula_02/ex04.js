// Elabore um algoritmo que leia quatro valores (n1, n2, n3, n4). A seguir, calcule e mostre a diferença do produto entre n1 e n2 pelo produto entre n3 e o n4. Veja os exemplos abaixo://

const leia = require ('readline-sync')

let n1, n2, n3, n4, DiProduto

n1 = leia.questionFloat ("Digite n1: ")
n2 = leia.questionFloat ("Digite n2: ")
n3 = leia.questionFloat ("Digite n3: ")
n4 = leia.questionFloat ("Digite n4: ")

DiProduto = (n1*n2)-(n3*n4)

console.log ("Diferença: ", DiProduto)