//Variaveis 

let nome = prompt('Insira seu nome:')
let idade = parseInt(prompt('Insira sua idade'))
let carteira = prompt('Possui CNH?')
let carro = prompt('Possui Carro?')

//Condicionais 

if(idade < 18 || carteira === 'Não' ){
    console.log(nome,'você não pode dirigir!')
}else if(idade >= 18 && carteira === 'Sim' && carro === "Não"){
    console.log(nome,"você pode dirigir mas não possui carro!")
}else if(idade >= 18 && carteira === "Sim" && carro === "Sim"){
    console.log(nome,"você será o motorista!")
}