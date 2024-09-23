// Desafio do Dia 3 do DoDev, criei uma outra pasta dentro do dia 3 para organizar os desafios/exercicios! 

let nome = prompt('Insira seu nome');
let idade = parseInt(prompt('Insira sua idade'));
let altura = parseFloat(prompt('Insira sua altura'));
let peso = parseInt(prompt('Insara seu peso'));
let IMC = peso / (altura * altura);
let anoDeNascimento = 2024 - idade

console.log("Olá " + nome + ",você tem " + idade + ",Nasceu em " + anoDeNascimento + ",tem " + altura + " de altura, pesa " + peso + " KG e seu IMC é " + IMC + " Kg/m²")

//Eu poderia declarar a variavel antes para organizar melhor o codigo, pois eu resolvi fazer assim para fixar melhor na cabeça!