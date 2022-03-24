const anos: number= +process.argv[2];
const escolaridade: string= process.argv[3];
const tempoDisponivel: number = +process.argv[4];
const tipoDeCurso: string= process.argv[5];

const estudarNaLabenu= (idade:number, ensinoMedio:string, horas:number, modalidade:string): boolean => {
    
    if(idade >= 18 && ensinoMedio === "true" && horas >= 20 && modalidade === "integral" || modalidade === "noturno"){

        return true;
    };

    return false;
};

console.log(estudarNaLabenu(anos, escolaridade, tempoDisponivel, tipoDeCurso));