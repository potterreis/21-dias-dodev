//if e else
// == - igual | != difernte | < menos que > maior que | <= >= maior e menor ou igual 
// === - É igual o valor e o tipo | !== - Diferente o valor e o tipo 

let idade = Number(prompt('Insira sua idade'));
let nome = prompt('Insira seu nome')

/* if(idade <= 10){
    console.log(idade)
    let dentroEscopo = 'Pedro'
    console.log(dentroEscopo)
    console.log('Você tem menos ou tem 10 anos')
    if(true){
        console.log('Estou no terceiro escopo')
        console.log(dentroEscopo)
    }
}else{
    console.log('Você tem mais de 10 anos')
}
console.log('Sai do Escopo do IF')
console.log(dentroEscopo) 
*/

// E e OU 
if(idade === 20 && nome === "Pedro"){
    console.log("Você tem 20 anos e seu nome é Pedro")
}else if(idade === 20 || nome === 'Pedro'){
    console.log('Você tem 20 anos OU Seu nome é Pedro')
}else{
    console.log('Você não tem 20 anos OU seu nome não é Pedro')
}



