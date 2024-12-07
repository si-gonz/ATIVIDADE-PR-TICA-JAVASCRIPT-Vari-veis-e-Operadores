const leia = require('readline-sync')

let idade,
    esporte,
    futebol = 0,
    voleibolMaior18 = 0,
    basqueteMenor18 = 0,
    outros = 0
let continua = 'S';

while (continua === 'S') {

    idade = leia.questionInt("\nDigite a sua idade: ");

    // Validação simples de dados
    do {
        esporte = leia.questionInt("\nDigite o seu esporte favorito (1-FUT/2-VOL/3-BAQ/4-OUTROS):  ");
        if (esporte < 1 || esporte > 4)
            console.log("\nDigite um número entre 1 e 4");
    } while (esporte < 1 || esporte > 4);

    // Incrementando contadores conforme o esporte selecionado
    if (esporte === 1) {
        futebol++;
    } else if (esporte === 2 && idade > 18) {
        voleibolMaior18++;
    } else if (esporte === 3 && idade < 18) {
        basqueteMenor18++;
    } else if (esporte === 4) {
        outros++;
    }

    // Pergunta fora dos blocos if
    continua = leia.question("\nDeseja continuar (S/N)? ").toUpperCase();
}

console.log(`\nTotal de pessoas que gostam de futebol: ${futebol}`);
console.log(`Total de pessoas que gostam de voleibol e são maiores de 18 anos: ${voleibolMaior18}`);
console.log(`Total de pessoas que gostam de basquete e são menores de 18 anos: ${basqueteMenor18}`);
console.log(`Total de pessoas que gostam de outros esportes: ${outros}`);