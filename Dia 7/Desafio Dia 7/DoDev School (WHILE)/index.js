let mediageral = 0
let qtdHomens = 0
let qtdMulheresAcimaDe7 = 0
let maiorNotaHomens = 0
let contador = 1 

while(contador <= 10){
    nota = parseInt(prompt("Digite a nota do " + contador + "° aluno"))
    sexo = prompt('Digite o sexo do aluno')

    if(sexo == "m"){
        if(nota > maiorNotaHomens){
            maiorNotaHomens = nota
        }
        qtdHomens++
    }

    if(sexo == "f" && nota > 7){
        qtdMulheresAcimaDe7++
    }

    mediageral += nota
    contador++
}

mediageral = mediageral / 10

console.log("A Media geral dos alunos foi " + mediageral)
console.log("A quantidade de homens cadastrados foi " + qtdHomens)
console.log("A Quantidade de mulheres que tiveram a nota acima de 7 foi " + qtdMulheresAcimaDe7)
console.log("A Maior nota entre os homen foi " + maiorNotaHomens)