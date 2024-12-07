//Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, construa um algoritmo que consiga pesquisar dados no vetor, onde o usuário irá digitar um número e o programa deve exibir na tela a posição deste número no vetor. Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela. Veja os exemplos abaixo://

const leia = require("readline-sync");

let vetor = [3, 2, 5, 6, 9, 23, 4, 6, 13, 24];

let numero = leia.questionInt("Digite um numero : ");

let posicao = vetor.indexOf(numero);

if (posicao >0) {
    console.log(`O numero ${numero} esta localizado na posição: ${posicao}`);
} else {
    console.log("Nao foi encontrado!");
}