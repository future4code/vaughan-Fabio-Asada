var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
;
const filmes = (nome, anoLancamento, genero, pontuacao) => {
    let filme;
    if (!pontuacao) {
        return filme = { nome, anoLancamento, genero };
    }
    ;
    return filme = { nome, anoLancamento, genero, pontuacao };
};
console.log(filmes("Duna", 2021, GENERO.ACAO));
//# sourceMappingURL=index.js.map