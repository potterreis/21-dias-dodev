//Variaveis
let num1 = parseInt(prompt('Insira um Número:'))
let num2 = parseInt(prompt('Insira outro Número:'))
let operacao = prompt('Escolha qual operação matemática você deseja:')


//Criando SwithCase
switch(operacao){
    case 'Multiplicação':
        console.log(num1 + " * " + num2 + " = " + (num1 * num2))
        break;
    case 'Divisão':
        console.log(num1 + " / " + num2 + " = " + (num1 / num2))
        break;
    case 'Adição':
        console.log(num1 + " + " + num2 + " = " + (num1 + num2))
        break;
    case 'Subtração':
        console.log(num1 + " - " + num2 + " = " + (num1 - num2))
        break;
    default:
        console.log('Essa operação não está disponivel')
}