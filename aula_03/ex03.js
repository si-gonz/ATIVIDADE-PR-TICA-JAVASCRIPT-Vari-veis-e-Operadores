//Para doar sangue é necessário ter entre 18 e 69 anos. Pessoas com idade entre 60 e 69 anos, só podem doar sangue se não for a sua primeira doação. Escreva um Algoritmo que leia via teclado o nome do doador (string), a idade (número inteiro) do doador e se já fez outras doações de sangue (boolean). Conforme as Regras para a doação de sangue citadas acima, mostre na tela se o doador está Apto ou Não Apto para doar sangue. Veja os exemplos abaixo://

const leia = require ('readline-sync')


let nome = leia.question('Digite o seu nome: ')
let idade = leia.questionInt ('Digite a sua idade: ')
let doador = leia.question ("Se ja doou sangue? Digite: SIM ou NAO: ").toUpperCase()


 if (idade < 18 || idade >69){
    console.log(`${nome} não esta apto para doar sangue`)
    process.exit(0);
 }


 else if (idade >= 60 && doador != "SIM"){
    console.log(`${nome} não esta apto para doar sangue`)
    process.exit(0);
 }

 else {
    console.log(`${nome} esta apto para doar sangue!!!`)
 }