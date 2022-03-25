enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
};

type Informacoes= {
    nome:string,
    anoLancamento: number,
    genero:GENERO,
    pontuacao?:number,
}

const filmes=(nome:string, anoLancamento: number, genero:GENERO, pontuacao?:number ): Informacoes => {
    let filme:Informacoes

    if(!pontuacao){

        return filme= {nome, anoLancamento, genero};
    };

    return filme= {nome, anoLancamento, genero, pontuacao};
};

console.log(filmes("Duna", 2021, GENERO.ACAO));