
const anagramas= (palavra:string): number => {
    let fatorial: number= palavra.length;
    let arrayNumber: number[]= [];

    if(fatorial === 1 || !fatorial){
        return 1;
    }

    for(let i=0; i < fatorial; fatorial--){
        arrayNumber.push(fatorial)
    }
    
    const resultado: number= arrayNumber.reduce((acc, item) => acc * item, 1); 
    
    return resultado;
};

console.log(anagramas("mesa"));