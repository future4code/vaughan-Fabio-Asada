// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    //return array.reverse();

    // Desafio
    const invertido= array.map((_,index, arr) => {
        let ultimoElemento= arr.length - 1;

        return arr[ultimoElemento - index];
    });

    return invertido;
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    //return array.sort((a, b) => a - b);

    //Desafio
    const novoArray=[];
    let menorNumeroDoArray= array;
    let numeroDeCaracteres= array.length;
    
    for(let i= 0; i < numeroDeCaracteres; i++){
        let inicio= Math.min(...menorNumeroDoArray);

        novoArray.push(inicio);
        let numeroRemovido= menorNumeroDoArray.indexOf(inicio);

        menorNumeroDoArray.splice(numeroRemovido, 1);
    };

    return novoArray;
}


// EXERCÍCIO 04
function retornaNumerosPares(array) {
    // const pares= array.filter(item => item % 2 === 0);

    // return pares;

    //Desafio
    const pares= [];

    array.forEach(element => {
        if(element % 2 === 0){
            pares.push(element);
        }
    });

    return pares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const pares= array
        .filter(item => item % 2 === 0)
        .map(item => item ** 2);

    return pares;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior= 0;

    array.forEach(item => {
        if(item > maior){
            maior = item;
        }
    });

    return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior= Math.max(num1, num2);
    let menor= Math.min(num1, num2);
    let eDivisivel= maior % menor === 0;
    let resultadoDaDiferenca= maior - menor;

    if(num1 === num2){
        maior = num1;
        resultadoDaDiferenca = 0;
    };

    return {
        maiorNumero:maior,
        maiorDivisivelPorMenor:eDivisivel,
        diferenca:resultadoDaDiferenca
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const numeros= 50;
    const array= [];

    for(let i= 0; i < numeros; i++){
        if(i % 2 === 0){
            array.push(i);
        }
    }
    return array.slice(0, n)
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoB === ladoC){
        return "Equilátero";

    }else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        return "Escaleno";

    }else{
        return "Isósceles";
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let ordem= array.sort((a,b) => a - b);
    
    let segundoMaior= ordem[(ordem.length - 1) - 1];
    let segundoMenor= ordem[1];

    return [segundoMaior, segundoMenor];
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return { ...pessoa, nome:"ANÔNIMO"};
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}