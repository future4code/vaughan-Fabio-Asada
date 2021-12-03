/*
======================== Exercícios de interpretação de código =================
1 - Exercício

a - 10 e 50;
b - Não iria aparecer nada no console;

=================================================================================
=================================================================================

2 - Exercício

a - Essa função pega o texto que o usuário digitou, transforma suas letras em minúsculas, e verifica se nela existe a palavra "cenoura";

b - 
i.   true;
ii.  true;
iii. false;

*/

//======================== Exercícios de escrita de código =================
// 1 - Exercício

const personalInformation= () => {
    const introduction= 'Eu sou Fábio, tenho 37 anos, moro em Guarulhos e sou estudante.';

    console.log(introduction);
};

personalInformation();

const personalInformation2= (name, age, city, occupation) => {
    const introduction= `Eu sou ${name}, tenho ${age} anos, moro em ${city} e sou ${occupation}.`;

    return introduction;
};

const johnWick= personalInformation2("John Wick", 50, "Nova York", "ex-assassino da máfia russa")
console.log(johnWick);

// ==============================================================================
// ==============================================================================
// 2 - Exercício

// a 
const sum= (numberOne, numberTwo) => numberOne + numberTwo;
console.log(sum(25, 50));

// b 
const biggerOrEqual= (numberOne, numberTwo) => numberOne >= numberTwo;
console.log(biggerOrEqual(50, 50));

// c
const pair= numberOne => numberOne % 2 === 0;
console.log(pair(8));

// d
//const string= prompt("Digite um frase").trim();
// const lengthAndUppercase= string => {
//     const showMessage= `Tamanho da msg: ${string.length} caracteres. \nLetras maiúsculas: ${string.toUpperCase()}`;
    
//     console.log(showMessage);
// };

// lengthAndUppercase(string);

// ==============================================================================
// ==============================================================================
// 3 - Exercício

// const userNumbersOne= Number(prompt("Digite um número."));
// const userNumbersTwo= Number(prompt("Digite outro número."));

// const operations= (string, result) => console.log(string, result);

// const addiction= (numberOne, numberTwo) => operations("Soma:", numberOne + numberTwo);
// const subtraction= (numberOne, numberTwo) => operations("Diferença:", numberOne - numberTwo);
// const multiply= (numberOne, numberTwo) => operations("Multiplicação:",numberOne * numberTwo);
// const division= (numberOne, numberTwo) => operations("Divisão:",numberOne / numberTwo);

// console.log(`Números inseridos: ${userNumbersOne} e ${userNumbersTwo}`);
// addiction(userNumbersOne, userNumbersTwo);
// subtraction(userNumbersOne, userNumbersTwo);
// multiply(userNumbersOne, userNumbersTwo);
// division(userNumbersOne, userNumbersTwo);

//==============================================================================
//================================= Desafios ===================================
// 1 - Exercício

// const firstNumber= Number(prompt("Digite um número."));
// const secondNumber= Number(prompt("Digite outro número."));

// const showInConsole= result => console.log(result);
// const addingTheValues= (numberOne, numberTwo) => showInConsole(numberOne + numberTwo);

// addingTheValues(firstNumber, secondNumber);

// ==============================================================================
// ==============================================================================
// 2 - Exercício

function pitagoras(catetoA, catetoB){
    const sum= catetoA ** 2 + catetoB ** 2;

    return sum ** (1/2);
};

const catA= Number(prompt("Digite o valor do 1° Cateto."));
const catB= Number(prompt("Digite o valor do 2° Cateto."));
const hypotenuse= pitagoras(catA, catB);

console.log(hypotenuse);