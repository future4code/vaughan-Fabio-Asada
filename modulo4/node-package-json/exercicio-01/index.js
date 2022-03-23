//a) Através do objeto process.argv. Podemos pegar as informações passadas pelo ternimal, de dentro de um array.

const amarelo= "\033[1;33m";
const vermelho= "\033[0;31m";

const apresentacao= () => {
    const [,, nome, idade]= process.argv;

    if(!nome && !idade){
        console.log(vermelho + "Insira 2 parâmetros.");

    }else if(!nome || !idade){
        console.log(vermelho + "Esperava 2 parâmetros só recebi um.");
        
    }else{
        //b)
        console.log(amarelo + `"Olá, ${nome}! Você tem ${idade} anos."`);
    
        //c)
        console.log(amarelo + `"Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${+idade + 7}."`);
    };
};

apresentacao();
