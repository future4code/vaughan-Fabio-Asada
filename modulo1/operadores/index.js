/*
===================== Exercícios de interpretação de código ==========================

1°- Exercício
a - false;
b - false;
c - true;
d - "boolean";

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-

2°- Exercício

Resposta: Será impresso a concatenação de 2 Strings.

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-

3°- Exercício

let primeiroNumero = Number(prompt("Digite um numero!"));
let segundoNumero = Number(prompt("Digite outro numero!"));

console.log(primeiroNumero + segundoNumero);

*/

// ====================== Exercícios de escrita de código ==========================

// 1 - Exercício

// const age= Number(prompt("Quantos anos você tem?"));
// const friendsAge= Number(prompt("Quantos anos tem seu melhor amigo?"));
// const question= "Sua idade é maior do que a do seu melhor amigo?";
// const biggerThan= age > friendsAge;
// const ageDifference= age - friendsAge;

// console.log(question, biggerThan);
// console.log("Diferença de idade:", ageDifference);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// 2 - Exercício

// const evenNumber= Number(prompt("Insira um número par."));
// const rest= evenNumber % 2;
// Resposta - O resto da divisão dos números pares será sempre 0;
// Resposta - O resto da divisão dos números ímpares será sempre 1;

// console.log(rest);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// 3 - Exercício

// const yourAge= Number(prompt("Quantos anos você tem?"));
// const months= yourAge * 12;
// const days= months * 30;
// const hours= days * 24;

// console.log(months);
// console.log(days);
// console.log(hours);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// 4 - Exercício

// const firstNumber= Number(prompt("Digite um número"));
// const secondNumber= Number(prompt("Digite um outro número"));

// const isBigger= "O primeiro número é maior que segundo?"; 
// const isEqual= "O primeiro numero é igual ao segundo?"; 
// const divisibleBySecond= "O primeiro numero é divisível pelo segundo?"; 
// const divisibleByFirst= "O segundo numero é divisível pelo primeiro?"; 

// console.log(isBigger, firstNumber > secondNumber);
// console.log(isEqual, firstNumber === secondNumber);
// console.log(divisibleBySecond, firstNumber % secondNumber === 0);
// console.log(divisibleByFirst, secondNumber % firstNumber === 0);

// ==========================================================
// ====================== Desafios ==========================

// 1 - Exercício

// const seventySeven= ((77 - 32)*(5/9) + 273.15).toString() + " °K";
// const eighty= (80 * (9/5) + 32).toString() + " °F";
// const thirtyCToFAndK= (30 * (9/5) + 32).toString() + " °F " + ((Number(30 * (9/5) + 32) - 32)*(5/9) + 273.15).toString() + " °K";

// const user= Number(prompt("Digite um número"));
// const transformUserNumber= (user * (9/5) + 32).toString() + " °F " + ((Number(user * (9/5) + 32) - 32)*(5/9) + 273.15).toString() + " °K";

// console.log(seventySeven);
// console.log(eighty);
// console.log(thirtyCToFAndK);
// console.log(transformUserNumber);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// 2 - Exercício

const quilowattHour= 0.05;
const cost= 280 * quilowattHour;
const discount= cost * 0.15;
console.log("Essa casa deve pagar R$", cost - discount, "por hora.");

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// 3 - Exercício

//a
const librasParaQuilogramas = 20 / 2.2046;
console.log("20lb equivalem a", librasParaQuilogramas.toFixed(2), "kg.");

//b
const oncaParaQuilogramas = 10.5 / 35.274;
console.log("10.5oz equivalem a", oncaParaQuilogramas.toFixed(2), "kg.");

//c
const milhaParaMetro = 100 / 0.00062137;
console.log("100mi equivalem a", milhaParaMetro.toFixed(2), "m.");

//d
const pesParaMetro = 50 / 3.2808;
console.log("50ft equivalem a", pesParaMetro.toFixed(2), "m.");

//e
const galoesParaLitro = 103.56/ 0.26417;
console.log("103.56gal equivalem a", galoesParaLitro.toFixed(2), "l.");

//f/g
const xicara= Number(prompt("Digite o número de xícaras que deseja transformar?"));
const xicaraParaLitro = xicara * 0.24;
console.log(xicara,"xic equivalem a", xicaraParaLitro.toFixed(2), "l.");
