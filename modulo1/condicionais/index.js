/*
====================== Exercícios de interpretação de código =======================

1 - Exercício

a = Verifica se o resto da divisão, é igual a 0. Se for, exibe a msg "Passou no teste.". Se não for, exibe a msg "Não passou no teste."

b - Números pares.

c - Números ímpares.

=====================================================================================
=====================================================================================

2 - Exercício

a - Dependendo da fruta, seu preço é diferente.

b - "O preço da fruta Maçã é R$ 2.25"

c - "O preço da fruta Pêra é R$ 5"

=====================================================================================
=====================================================================================

3 - Exercício

a - Pedindo para o usuário digitar um número.

b - Se o usuário digitou o número 10. Será exibido essas mensagens no console:
"Esse número passou no teste"
"Essa mensagem é secreta!!!"

Se o usuário digitou o número -10. Será exibido undefined.

c - Como -10 é menor que 0, não entrará no bloco do if. E como a varivél mensagem, foi criada dentro desse escopo. Quando for para exiber o seu valor, o javascript irá dizer que ela não existe.

=====================================================================================
=====================================================================================
*/

//========================== Exercícios de escrita de código=========================

// 1 - Exercício

const dirigir= () => {
    const idade= Number(prompt("Qual a sua idade?"));
    const maiorOuIgualA18= idade >= 18;

    if(maiorOuIgualA18){
        console.log("Você pode dirigir.");
        return;
    }

    console.log("Você não pode dirigir.");
};

//dirigir();

//===================================================================================
//===================================================================================

// 2 - Exercício

const turnoDoDia = () => {
    const periodo= prompt("Qual período você estuda?").trim().toLocaleUpperCase();
    
    if(periodo === "M"){
        console.log("Bom Dia!");
    }else if(periodo === "V"){
        console.log("Boa Tarde!");
    }else if(periodo === "N"){
        console.log("Boa Noite!");
    }else{
        console.log("Período inválido."); 
    }
};

//turnoDoDia();

//===================================================================================
//===================================================================================

// 3 - Exercício

const turnoDoDia2 = () => {
    const periodo= prompt("Qual período você estuda?").trim().toLocaleUpperCase();
    
    switch(periodo){
        case "M":
            console.log("Bom Dia!");
            break;
        case "V":
            console.log("Boa Tarde!");
            break;
        case "N":
            console.log("Boa Noite!");
            break;
        default:
            console.log("Período inválido.");
            break; 
    };
};

//turnoDoDia2();

//===================================================================================
//===================================================================================

// 4 - Exercício

const cinema= () => {
    const generoFilme= prompt("Qual é o gênero do filme?").trim().toLowerCase();
    const precoIngresso= Number(prompt("Qual é o preço do filme?"));
    const fantasia = generoFilme === "fantasia";
    const menorQue15 = precoIngresso < 15;

    if(fantasia && menorQue15){
        const snack= prompt("Qual snack que você quer comprar?").trim();
        
        console.log(`Bom Filme.\nAproveite o seu ${snack}!`);
        return;
    };

    console.log("Escolha outro filme :(");
};

//cinema();

//===================================================================================
//=============================== Desafios ==========================================

// 2 - Exercício

const dadosDaCompra= () => {
    const nome= prompt("Digite o seu nome completo.").trim();
    const tipoDeJogo= prompt(`Jogo Internacional - digite IN\nJogo Doméstico - digite DO`).trim().toUpperCase();
    const etapaDoJogo= prompt(`Semi-final - digite SF\nDecisão de terceiro lugar - digite DT\nFinal - digite FI`).trim().toUpperCase();
    const categoria= Number(prompt("Digite 1, 2, 3 ou 4 para a categoria"));
    const quantDeIngressos= Number(prompt("Quantidade de ingressos."));

    return [nome, tipoDeJogo, etapaDoJogo, categoria, quantDeIngressos];
};

const imprimirNoConsole= (precos, etapaDoJogo, categoria, quantDeIngressos, nome, tipoDeJogo, realOuDolar, cambio) => {
    const custoDoIngresso= precos[etapaDoJogo][categoria - 1] * quantDeIngressos;
        
    console.log("========== Dados da Compra ===============");
    console.log(`Nome do Cliente: ${nome}`);
    console.log(`Tipo do jogo: ${tipoDeJogo}`);
    console.log(`Etapa do jogo: ${precos[etapaDoJogo][4]}`);
    console.log(`Categoria: ${categoria}`);
    console.log(`Quantidade de Ingressos: ${quantDeIngressos} ingressos`);
    console.log("------------------- Valores ---------------");
    console.log(`Valor do Ingresso: ${realOuDolar} ${(precos[etapaDoJogo][categoria - 1]) * cambio}`);
    console.log(`Valor Total: ${realOuDolar} ${custoDoIngresso * cambio}`);
};

const sistemaDeIngressos= () => {
    // Informações do Usuário.
    const [nome, tipoDeJogo, etapaDoJogo, categoria, quantDeIngressos] = dadosDaCompra();

    //Preços dos Jogos
    const precos= {
        "SF":[1320, 880, 550, 220, "Semi-Final"],
        "DT":[660, 440, 330, 170, "Decisão do Terceiro Colocado"],
        "FI":[1980, 1320, 880, 330, "Final"]
    }

    if(tipoDeJogo === "DO"){

        imprimirNoConsole(precos, etapaDoJogo, categoria, quantDeIngressos, nome, "Nacional", "R$", 1);
        return
    };
        
    imprimirNoConsole(precos, etapaDoJogo, categoria, quantDeIngressos, nome, "Internacional", "U$", 4.10);
};

sistemaDeIngressos();