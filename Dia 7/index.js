/* let condicao = true;
while(condicao === true){  //Enquanto for verdade ele não vai ser parada 
    let idade = Number(prompt('Insira sua idade'))
    if(idade < 18){
        console.log('Você é menor de idade')
        condicao = false //Colocando a condicao para ser parada 
    }
}

console.log('Acabou o While') */

let idade = 17;

do {
    idade = Number(prompt('Insira sua idade'))
    console.log(idade)
} while(idade >= 18);

console.log('Você é menor de idade')