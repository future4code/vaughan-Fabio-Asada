//-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//======== Exercícios de interpretação de código ==============================
//-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

/*
1 - Resposta:

1°- 10;
2°- 10, 5;

-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=--=

2 - Resposta:

10, 10, 10;

-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=--=

3 - Resposta:

let hoursWorkedPerDay= Number(prompt("Quantas horas você trabalha por dia?"));
let howMuchDoYouEarn= Number(prompt("Quanto você recebe por dia?"));
alert(`Voce recebe ${howMuchDoYouEarn / hoursWorkedPerDay} por hora.`);

*/

//-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//=============== Exercícios de escrita de código ================================
//-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// 1° Programa.
// let name;
// let age;

// console.log(typeof name, typeof age);
//Resposta - Receberão undefined pois não foi atribuído valor a elas;

// name= prompt("Qual é o seu nome?");
// age= Number(prompt("Qual é a sua idade?"));

// console.log(typeof name, typeof age);
//Reposta - Agora as duas variáveis receberam valores. Name é uma string, e age é um number;

// name += ",";
// console.log( "Olá",name,"você tem", age, "anos.");


// -=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=---=-=-=-=-
// 2° Programa.

// const temMundial= "Palmeiras tem Mundial?";
// const caixaPreta= "Caixa-preta do avião é preta?";
// const chester= "Você já viu um Chester?";

// const temMundialResposta= prompt(temMundial);
// const caixaPretaResposta= prompt(caixaPreta);
// const chesterResposta= prompt(chester);

// console.log(temMundial,"-",temMundialResposta);
// console.log(caixaPreta,"-", caixaPretaResposta);
// console.log(chester,"-", chesterResposta);

// -=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=---=-=-=-=-
// 3° Programa.

// let a = 10;
// let b = 25;
// let c = a; 

// a = b;
// b = c;

// console.log("O novo valor de a é", a);
// console.log("O novo valor de b é", b);


//-=-=-=-=-=--=-=--=-=-=-=-=--=-=- Desafios -=-=-=-=-=--=-=--=-=-=-=-=-=-=-=-

const numberOne= Number(prompt("Digite o primeiro valor?"));
const numberTwo= Number(prompt("Digite o segundo valor?"));
const sum= numberOne + numberTwo;
const multiply= numberOne * numberTwo;

const transformInStringSum = sum.toString() + ".";
const transformInStringMultiply = multiply.toString() + ".";

console.log("O primeiro número somado ao segundo número resulta em:", transformInStringSum);
console.log("O primeiro número multiplicado pelo segundo número resulta em:", transformInStringMultiply);