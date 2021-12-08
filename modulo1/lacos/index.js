/* =============== Exercícios de interpretação de código =============

1 - Exercício

10

========================================================================

2 - Exercício

a - 19, 21, 23, 25, 27, 30

b - 
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
let indice= 0;

for (let numero of lista) {
    console.log(`${indice}: ${numero}`);

    if (numero > 18) {
		console.log(numero)
	};

    indice++
}
========================================================================

3 - Exercício

Resposta: "****"

- Se digitar "V":

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0;
let linha = "";

if(quantidadeTotal !== "NaN"){
    while(quantidadeAtual < quantidadeTotal){

        for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
            linha += "*"
        }
        console.log(linha)
        quantidadeAtual++
    }
}else{
    console.log("Boa tarde!");
}
*/

//=================================================================================
//====================== Exercícios de escrita de código ==========================

// 1 - Exercício

//const numeroDeBichos= Number(prompt("Quantos animais de estimação você tem?"));
const arrayComNomes= []; 

const pets= numeros => {
    if(!numeros) return "Que pena! Você pode adotar um pet!";

    for(let i= 0; i < numeros; i++){
        const nome= prompt("Qual o nome do seu bicho?").trim();
        arrayComNomes.push(nome);
    };

    return arrayComNomes;
};

//const mostrarNoConsole = pets(numeroDeBichos);
//console.log(mostrarNoConsole);

//=================================================================================

// 2 - Exercício

const trabalhandoComNumeros= () => {
    const arrayOriginal= [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
    const novoArray= [];
    const novoArrayDeStrings= [];
    let maior= 0;
    let menor= 1000;
    
    for(let i= 0; i < arrayOriginal.length; i++){
        console.log(`Valores Originais: ${arrayOriginal[i]}`);
        
        if(arrayOriginal.length - 1 === i){
            for(let inicio= 0; inicio < arrayOriginal.length; inicio++){
                console.log(`Valores / 10: ${arrayOriginal[inicio] / 10}`);
            }
        };

        if(arrayOriginal[i] % 2 === 0){
            novoArray.push(arrayOriginal[i]);
        };

        novoArrayDeStrings.push(`O elemento do índex ${i} é: ${arrayOriginal[i]}`);

        if(arrayOriginal[i] > maior){
            maior = arrayOriginal[i];
        };

        if(arrayOriginal[i] < menor){
            menor = arrayOriginal[i];
        };
    };

    console.log(novoArray);
    console.log(novoArrayDeStrings);
    console.log(`O maior número é ${maior} e o menor é ${menor}.`);
};

//trabalhandoComNumeros();

//=================================================================================
//=============================== Desafios ========================================

// 1 - Exercício

// ==> Deixei 5, por que no 100 é muito difícil acertar!
const computador= Math.ceil(Math.random() * 5);
let segundoJogador= Number(prompt("Chute um número."));
let tentativas= 1;

const adivinhaNumero= () => {
    console.log("Vamos Jogar!");

    while(computador !== segundoJogador){
        console.log(`O número chutado foi: ${segundoJogador}`);
        console.log(`Errrrrrrrou, ${segundoJogador > computador ? "é menor." : "é maior."}`);
        
        tentativas++
        segundoJogador= Number(prompt("Chute outro número."));
    }

    console.log(`O número chutado foi: ${segundoJogador}\nAcertou!!!\nO número de tentativas foi: ${tentativas}`);
};

adivinhaNumero();

/*
Reflexão do dia

1- Foi fácil fazer esta alteração?
Como essa mudança, não foge muito do que havia sido pedido nos itens anteriores, foi bem tranquilo de realizá-la.

2- O que você poderia ter feito para que fosse mais fácil?
Talvez aprender a deixar o código mais limpo, ou quem sabe aprender a programar! kkkkkk

*/ 
