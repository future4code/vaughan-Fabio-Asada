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
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
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