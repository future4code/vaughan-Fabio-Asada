/*
===================== Exercícios de interpretação de código =======================

1 - Exercício

{ nome: "Amanda Rangel", apelido: "Mandi" }, 0,  array usuarios
{ nome: "Laís Petra", apelido: "Laura" }, 1,  array usuarios
{ nome: "Letícia Chijo", apelido: "Chijo" }, 2,  array usuarios

================================================================================

2 - Exercício

["Amanda Rangel", "Laís Petra", "Letícia Chijo"] 

================================================================================

3 - Exercício

[{ nome: "Amanda Rangel", apelido: "Mandi" }, { nome: "Laís Petra", apelido: "Laura" }]
*/

//==============================================================================
// ========================= Exercícios de escrita de código ===================

// 1 - Exercício

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
];

// a 
const nomeDosCochorros= pets.map(obj => obj.nome);
console.log(nomeDosCochorros);

// b 
const salsicha= pets.filter(obj => obj.raca === "Salsicha");
console.log(salsicha);

// c
const desconto= pets
    .filter(obj => obj.raca === "Poodle"? true : false)
    .map(obj => `Você ganhou um cupom de desconto de 10% para tosar o/a ${obj.nome}!`)

console.log(desconto);

//==============================================================================

// 2 - Exercício

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
];

// a
const compras= produtos.map(obj => obj.nome);
console.log(compras);

// b
const descontoDeCincoPorCento= produtos.map(obj => {
    const descont= Number((obj.preco - obj.preco * 0.05).toFixed(2));
    
    return {nome: obj.nome, preco: descont};
});

console.log(descontoDeCincoPorCento);

// c
const bebida= produtos.filter(obj => obj.categoria === "Bebidas");
console.log(bebida);

// d
const ype = produtos.filter(obj => obj.nome.includes("Ypê"));
console.log(ype);

// e
const compreNossosProdutos= ype.map(obj => `Compre ${obj.nome} por R$ ${obj.preco}`);
console.log(compreNossosProdutos);

//==============================================================================
// ================================ Desafios ===================================

// 1 - Exercício

// a
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
];

const ordemAlfabetica= pokemons.sort((itemA, itemB) => {
    if (itemA.nome > itemB.nome) {
        return 1;
    };
    if (itemA.nome < itemB.nome) {
        return -1;
    };
    
    return 0;
}).map(obj => obj.nome);

console.log(ordemAlfabetica);

//b
const especialidade=[];

pokemons.forEach(({tipo}) => {
    if(!especialidade.includes(tipo)){
        especialidade.push(tipo);
    }
});

console.log(especialidade);