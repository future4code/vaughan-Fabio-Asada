const apresentacao = (nome, data) => {
    const dia = data.split("/")[0];
    const mes = data.split("/")[1];
    const ano = data.split("/")[2];
    return `"Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}"`;
};
console.log(apresentacao("Alex", "18/03/2000"));
//# sourceMappingURL=index.js.map