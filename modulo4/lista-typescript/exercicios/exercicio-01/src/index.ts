
const apresentacao= (nome: string, data:string): string => {
    const dia: string= data.split("/")[0];
    const mes: string= data.split("/")[1];
    const ano: string= data.split("/")[2];

    return `"Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}"`;
};

console.log(apresentacao("Alex", "18/03/2000"))