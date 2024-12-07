let matriz = new Array(3)

for (let indice = 0; indice < matriz.length; indece++) {
    matriz[indice] = Array(3)
}



for (let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++) {
    for (let indiceColuna = 0; indiceColuna < matriz.length; indiceColuna++)
        matriz[indiceColuna][indiceLinha] = leia.questionInt(" Digite um numero ")

    matriz[indice] = Array(3)
}


console.table(matriz)