let saldo = 1000 //Inicializamos o slado com um valor inicial
let maiorValorInserido = 0
let somaValoresInseridos= 0 
let totalTransacoes = 0
let continuar = false

do {
    const nome = prompt("Digite seu nome:")
    const cpf = prompt('Digite seu CPF:')
    const valor = Number(prompt('Digite o valor da transação'))
    const operacao = prompt('Qual operação deseja fazer? S / D')

    if(valor < 0){
        console.log("Valor Inválido. A transação não foi relaziada.")
    } else if(operacao == "S" && valor > saldo){
        console.log("Saldo insuficiente. A transação não foi relaziada")
    }else if(operacao == "S")
        console.log('Olá, '+ nome +" "+ cpf +', seu saldo atual é R$'+saldo)
        saldo -= valor
        totalTransacoes++
        somaValoresInseridos += valor
        if(valor > maiorValorInserido){
            maiorValorInserido = valor
            console.log('Transação realizada com sucesso. Seu saldo atual é R$'+saldo)
        }else{
            console.log('Olá, ' + nome +" "+ cpf + ' ,seu saldo atual é R$'+saldo )
            saldo += valor
            totalTransacoes++
            somaValoresInseridos += valor
            if(valor > maiorValorInserido){
                maiorValorInserido = valor
            }
            console.log('Transação feita com sucesso. Seu saldo atual é R$'+saldo)
        }

        const opcao = prompt('Deseja continuar? (1 Para continuar, 2 para parar) ')
        if(opcao === "1"){
            continuar = true
        }else if(opcao === "2"){
            continuar = false
        }else{
            console.log('Opção inválida. Programa encerrado')
            continuar = false
        }

} while (continuar);

console.log('Saldo final: R$'+saldo)
console.log('Maior valor inserido: R$'+maiorValorInserido)
console.log('Média dos valores inseridos: R$' + somaValoresInseridos / totalTransacoes )