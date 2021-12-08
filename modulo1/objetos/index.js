// ============= Exercícios de interpretação de código =====================

/*
1 - Exercício
Resposta:

"Matheus Nachtergaele"
"Virginia Cavendish"
{canal: "Globo", horario: "14h"}
*/

// ===========================================================

/*
2 - Exercício
Resposta:

cachorro 
{
    nome: "Juca", 
    idade: 3, 
    raca: "SRD"
}

gato
{
	nome: "Juba", 
	idade: 3, 
	raca: "SRD"
}

tartaruga
{
	nome: "Jubo", 
	idade: 3, 
	raca: "SRD"
}

Spread Operator copia um objeto, e espalha as suas propriedades dentro de um novo objeto.
*/

// ==============================================================

/*
3 - Exercício
Resposta:

false
undefined

Pois pessoa.backender tem o valor false. E pessoa.altura não existe, então recebe undefined.
*/

// =========================================================================
// =================== Exercícios de escrita de código =====================

// 1 - Exercício

const person= {
    name: "Leia",
    nicknames:["Leinha", "Lele", "Lelezona"]
};

const personTwo= {
    ...person,
    nicknames:["Leloquinha", "Leah", "Leioca"]
};

const presentation= obj => {
    const name= obj.name;
    const nicknameOne= obj.nicknames[0];
    const nicknameTwo= obj.nicknames[1];
    const nicknameThree= obj.nicknames[2];

    const string= `Eu sou ${name}, mas pode me chamar de: ${nicknameOne}, ${nicknameTwo} ou ${nicknameThree}.`;
    
    console.log(string);
};

presentation(person);
presentation(personTwo);

// =========================================================================
// 2 - Exercício

const singer= {
    name:"André Matos",
    age:47,
    profession:"Singer"
};

const footballPlayer= {
    name:"Messi",
    age:34,
    profession:"Football Player"
};

const newArray= person => {
    const name= person.name;
    const charactersInName= person.name.length;
    const age= person.age;
    const profession= person.profession;
    const charactersInProfession= person.profession.length;

    return [name, charactersInName, age, profession, charactersInProfession];
};

const result= newArray(singer);
console.log(result);

const result2= newArray(footballPlayer);
console.log(result2);

// =========================================================================
// 3 - Exercício

const carrinho= [];

const laranja= {
    name: "Laranja",
    disponibilidade: true
};

const melancia= {
    name: "Melancia",
    disponibilidade: true
};

const uva= {
    name: "Uva",
    disponibilidade: true
};

const inserirNoCarrinho= fruta => carrinho.push(fruta);

inserirNoCarrinho(laranja);
inserirNoCarrinho(melancia);
inserirNoCarrinho(uva);

console.log(carrinho);

// =========================================================================
// =============================== Desafios ================================
// 1 - Exercício

const infoDoUsuario= () => {
    const pessoa={
        nome: prompt("Qual é o seu nome?").trim(),
        idade: Number(prompt("Qual é a sua idade?")),
        profissao: prompt("Qual é a seu profissão?").trim()
    };
    
    console.log(pessoa);
    console.log(typeof pessoa);
};

//infoDoUsuario();

// =========================================================================
// 2 - Exercício

const primeiroFilme= {nome:"Os Vingadores", lancamento:2018};
const segundoFilme= {nome:"Venom", lancamento:2018};

const filmes= (one, two) => {
    const antesDoSegundo= one.lancamento < two.lancamento;
    const mesmoAno= one.lancamento === two.lancamento;
    const string=`O primeiro filme foi lançado antes do segundo? ${antesDoSegundo}\nO primeiro filme foi lançado no mesmo ano do segundo? ${mesmoAno}`;
    
    return string;
};

console.log(filmes(primeiroFilme, segundoFilme));

// =========================================================================
// 3 - Exercício

const estoqueSacolao= fruta => {
    return { ...fruta, disponibilidade:false};
};

console.log(estoqueSacolao(melancia));



