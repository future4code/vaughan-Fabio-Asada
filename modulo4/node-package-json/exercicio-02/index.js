const operacao= process.argv[2];
const primeiro= +process.argv[3];
const segundo= +process.argv[4];

const blue = '\033[0;36m';

const calculo= () => {
    
    if(!operacao && !primeiro && !segundo){
        return "Necessário inserir a operação, o 1º número e o 2º número.";

    }else if(!operacao || !primeiro || !segundo){
        return "Faltam parâmetros.";

    }else{

        switch(operacao){
            case "add":
                return `Resposta: ${primeiro + segundo}`;
            case "sub":
                return `Resposta: ${primeiro - segundo}`;
            case "mult":
                return `Resposta: ${primeiro * segundo}`;
            case "div":
                return `Resposta: ${primeiro / segundo}`;
            default:
                return `Operação inválida!`;
        }
    }
};

console.log(blue + calculo());

