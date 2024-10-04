//Variaveis
let valor
let quantidade
let opcao = prompt('Sejá bem vindo ao posto DoDev Thru, você pode escolher entre abastecer com Gasolina, Abastecer com Alcool ou Calibrar os Pneus')

switch(opcao){
    case 'Gasolina':
        valor = parseInt(prompt('Insira um valor: '))
        quantidade = valor / 5
        console.log('Foram abastecidos ' + quantidade + ' L de Gasolina')
        break;
    case 'Alcool':
        valor = parseInt(prompt('Insira um valor: '))
        quantidade = valor / 3
        console.log('Foram abastecidos ' + quantidade + ' L de Acool')
        break;
    default:
        console.log('Pneus calibrados com sucesso!!')
}