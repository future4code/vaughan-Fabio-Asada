// O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.

// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// const minhaString: string = 15;
// Fala que a variável só pode receber valores do tipo string; 

// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

const meuNumero: number | string = 15;

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;
// `idade`, que é um número;
// `corFavorita`, que é uma string.
// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

const pessoa: {
    nome:string,
    idade:number,
    corFavorita:string,
}={
    nome:"Leila",
    idade:15,
    corFavorita:"vermelho",
};

enum ArcoIris {
    LARANJA = "laranja",
    VERMELHA= "vermelha",
    AMARELA= "amarela",
    VERDE= "verde",
    AZUL= "azul",
    AZULESCURO= "azul-escuro",
    VIOLETA= "violeta",
}

type Pessoa= {
    nome:string,
    idade:number,
    corFavorita:ArcoIris,
}

const izabela: Pessoa = {
    nome:"Izabela",
    idade:25,
    corFavorita:ArcoIris.AZUL,
};

const nadal: Pessoa = {
    nome:"Rafael Nadal",
    idade:33,
    corFavorita: ArcoIris.VERDE,
};

const leia: Pessoa = {
    nome:"Leia",
    idade:33,
    corFavorita:ArcoIris.VERMELHA,
};

// d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso.

