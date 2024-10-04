let idade = Number(prompt('Insira sua idade'))

switch(true){
    case idade < 10:
        console.log('Você tem 10 anos')
        break;
    case  idade > 15:
        console.log('Você tem 15 anos')
        console.log('Segunda linha')
        break;
    default:
        console.log('Default')
        break;
}