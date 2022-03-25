//a- A entrada é um array. A saída é um objeto com o maior número, menor número e a média desses números.

type AmostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => {},
};

const novosDados: AmostraDeDados = {
    numeros: [10, 20, 30, 40, 50],
    obterEstatisticas: (numeros: number[]): {maior:number, menor:number, media: number} => {
        const numerosOrdenados: number[] = numeros.sort(
            (a:number, b:number) => a - b
        )
    
        let soma : number = 0;
        let num: number;
    
        for (num of numeros) {
            soma += num;
        }
    
        const estatisticas: {maior:number, menor:number, media: number} = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        }
    
        return estatisticas;
    }
};

console.log(novosDados.obterEstatisticas([1, 2, 3, 4, 5, 6]));

function obterEstatisticas(numeros: number[]): {maior:number, menor:number, media: number}{
    const numerosOrdenados: number[] = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma : number = 0;
    let num: number;

    for (num of numeros) {
        soma += num;
    }

    const estatisticas: {maior:number, menor:number, media: number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
};

// console.log(obterEstatisticas([1, 2, 3, 4, 5, 6]));
