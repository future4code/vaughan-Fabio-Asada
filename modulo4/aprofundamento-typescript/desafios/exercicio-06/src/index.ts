
const idadeHistorica= (ano:number = undefined, sigla: "AC" | "DC" = "DC"): string => {
    if(!ano) return "Necessário inserir um ano!"
    
    if(ano >= -100000 && ano < -4000 && sigla === "AC"){
        return "Pré-história";

    }else if(ano >= -4000 && ano < 476 && sigla === "AC"){
        return "Idade Antiga";

    }else if(ano >= 476 && ano < 1453 && sigla === "DC"){
        return "Idade Média";

    }else if(ano >= 1453 && ano < 1789 && sigla === "DC"){
        return "Idade Moderna";

    }else if(ano >= 1789 && sigla === "DC"){
        return "Idade Contemporânea";

    }else{

        return "Dados inválidos!"
    }
};

console.log(idadeHistorica(1000, "DC"));