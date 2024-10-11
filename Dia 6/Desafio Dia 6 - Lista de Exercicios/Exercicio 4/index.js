/*Faça um algoritmo utilizando a estrutura de repetição FOR que receba 1 número e exiba na tela qual o resultado da sua tabuada e dos proximos 2 numeros */

let tabuada = parseInt(prompt('Escolha a tabuada que deseja'))

for(let i = tabuada; i <= tabuada + 2; i++ ){
    console.log("Tabuada do numero: " + i)
    for(let tabCont = 0; tabCont <= 10; tabCont++){
        console.log(i + " * " + tabCont + " = " + (i * tabCont))
    }
}
