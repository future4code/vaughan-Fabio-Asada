const [ , , nascimento, emissao]= process.argv;

const renovarIdentidade= (nascimento: string, emissao:string): boolean => {
    const dataAtual=new Date().getTime();
    const nascimentoArray: string[] =nascimento.split("/");
    const diaDoNascimento: number= +nascimentoArray[0];
    const mesDoNascimento: number= +nascimentoArray[1];
    const anoDoNascimento: number= +nascimentoArray[2];
    const nascimentoTimestamp: number= new Date(anoDoNascimento, mesDoNascimento + 1,  diaDoNascimento).getTime(); 

    const minutos: number= 1000 * 60;
    const hora: number= minutos * 60;
    const dia: number= hora * 24;
    const ano: number= dia * 365;

    const idade: number= Math.round((dataAtual - nascimentoTimestamp) / ano);

    // ===============================================================================================
    // ===============================================================================================
    
    const emissaoArray: string[] = emissao.split("/");
    const diaDaEmissao: number= +emissaoArray[0];
    const mesDaEmissao: number= +emissaoArray[1];
    const anoDaEmissao: number= +emissaoArray[2];
    const emissaoTimestamp: number= new Date(anoDaEmissao, mesDaEmissao + 1,  diaDaEmissao).getTime();
    
    const tempoDaCarteira: number= Math.round((dataAtual - emissaoTimestamp) / ano);

    if(idade <= 20 && tempoDaCarteira >= 5){
        return true;
    }else if(idade > 20 && idade <= 50 && tempoDaCarteira >= 10){
        return true;
    }else if(idade > 50 && tempoDaCarteira >= 15){
        return true;
    }else{
        return false;
    };
};

console.log(renovarIdentidade(nascimento, emissao))