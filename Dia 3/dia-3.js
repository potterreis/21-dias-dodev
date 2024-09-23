// Testando os tipos de variaveis 
let tipoTexto = "Oii amo minha namorada";
let tipoNumero = 2;
let tipoBoolTexto = "true";
let tipoBool = true; 

// VAR - LET - CONST (Não usar VAR pois no dia a dia não é mais utilizado)

console.log("------- LET ---------")
let meuNome = "Pedro Reis";
console.log(meuNome)
meuNome = 'Potter Reis';
console.log(meuNome)

console.log("-------- Constante ---------")

const a = 2;
console.log(a)
/* Erro no const pois não conseguimos alterar o valor de um const
a = 4
console.log(a) */

//Brincando um pouco com as variaveis 
console.log("---------Brincando um pouco com as variaveis!!-------")

const b = 2;
const c = 6;
const d = b + c;
console.log(d)

let Pedro = 'Pedro ama Anna,';
let Anna = 'Anna ama Pedro,';
let Amor = 'Eles se amam.';
console.log(Pedro,Anna,Amor)

//Operadores Aritmeticos
console.log("--------Operadores aritimeticos------")

let numUm = 1;
let numDois = 2;

let soma = numUm + numDois;
console.log(soma)

//Brincando um pouco com operadores aritmeticos
console.log("-----Brincando um pouco com os Operadores--------")

let um = 19 ;
let dois = 20;

let soma2 = um + dois;
console.log(soma2)

let setembro = 9;
let julho = 7; 
let dia = 22;
let nois = 'Nossos meses e o nosso dia fofinhos lindos';
console.log(setembro,julho,dia,nois) 

let var1 = 23;
let var2 = 2;
let soma3 = var1 % var2;
console.log(soma3)

//AIO Entrada e Saida de datas
console.log("-------AIO Entrada e Saida de Dados--------")

let entradaDoUsuario = prompt('Insira sua Idade');
console.log(entradaDoUsuario)
let entradaDoUsuarioEmInt = parseInt(entradaDoUsuario);
console.log(entradaDoUsuarioEmInt)

//Brincando um pouco com AIO Entrade e Saida de Dados
console.log("------Brincando um pouco com AIO Entrada e Saida de Dados---------")

let respostaInt = parseInt(prompt('Qnts Litros de águe devemos ingerir?'));
console.log(respostaInt)
