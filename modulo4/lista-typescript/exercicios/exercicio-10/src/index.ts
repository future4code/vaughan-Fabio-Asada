const validarCpf= (frase:string): boolean => {
    const primeiroArray: number[] = [10, 9,  8,  7,  6,  5,  4,  3,  2];
    const segundoArray: number[] = [11, 10, 9,  8,  7,  6,  5,  4,  3,  2];
    const cpfNumeros: number[] = 
        frase.replace("-", "")
        .split(".")
        .join("")
        .split("")
        .map((item:string): number => +item);
        
    const numerosIguais: any = cpfNumeros.filter((item:number) :boolean => item ===  cpfNumeros[0]);
    
    if(numerosIguais.length === cpfNumeros.length){
        return false;
    }

    const primeiroVerificadorMult: number[]= primeiroArray.map((item:number, index:number): number=> item * cpfNumeros[index]);

    const primeiroVerificadorSoma: number= primeiroVerificadorMult.reduce((acc:number, item:number):number => acc + item, 0);

    let primeiroVerificador: number= (primeiroVerificadorSoma * 10) % 11;

    if(primeiroVerificador >= 10){
        primeiroVerificador= 0;
    };
    
    cpfNumeros.push(primeiroVerificador);
   
    //========================================================================================
    //========================================================================================
    const segundoVerificadorMult: number[]= segundoArray.map((item:number, index:number): number=> item * cpfNumeros[index]);
    const segundoVerificadorSoma: number= segundoVerificadorMult.reduce((acc:number, item:number):number => acc + item, 0);

    let segundoVerificador: number= (segundoVerificadorSoma * 10) % 11;
    
    if(segundoVerificador >= 10){
        segundoVerificador= 0;
    };
    
    cpfNumeros.push(segundoVerificador);

    if(frase[12] === String(primeiroVerificador) && frase[13] === String(segundoVerificador)){
        return true;
    }

    return false;
};

console.log(validarCpf("145.382.206-20"))