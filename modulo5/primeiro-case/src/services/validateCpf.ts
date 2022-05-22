
export const allValidateCpf= (cpfNumber: number): any => {
    if(typeof cpfNumber === 'string' || typeof cpfNumber === 'boolean'){
        return "No campo Cpf insira somente números.";
    };
    
    if(typeof cpfNumber === 'number'){
        const cpfNumbers= String(cpfNumber);

        if(cpfNumbers.length === 11){
            const isValidCpf= validateCpf(cpfNumbers);
            
            if(!isValidCpf){
                return "Este Cpf é inválido.";
            };
        }else{
            return `O campo Cpf deve possuir 11 números. Foi digitado ${cpfNumbers.length} números`;
        }
    }
}



export const validateCpf= (cpf:string): boolean => {
    // Verificação do primeiro digito
    let sum= 0;
    for (var i = 0; i < cpf.length-2; i++) {
		sum += +cpf[i] * ((cpf.length-1)-i);
	};

    sum = (sum * 10) % 11;

    if(sum === 10 || sum === 11){
        sum = 0;
    };

    if(sum != +cpf[9]){
		return false;
    };


    // Verificação do segundo digito
    let sum2 = 0;
	for (var i = 0; i < cpf.length-1 ; i++) {
		sum2 += +cpf[i] * ((cpf.length)-i);
	};

	sum2 = (sum2 * 10) % 11;

    if(sum2 === 10 || sum2 === 11){
        sum2 = 0;
    };

    if(sum2 != +cpf[10]){
		return false;
    };

    return true;
};

