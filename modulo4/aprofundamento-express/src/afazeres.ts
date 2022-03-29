type Tarefas={
    nome:string,
}

export type Afazeres= {
    userId: string,
    id: number,
    title: Tarefas[],
    completed: string,
};

export const afazeres: Afazeres[]= [
    {
        "userId": "antonio-calton",
        "id": 1,
        "title": [{nome: "Ir ao supermecado"}, {nome:"Comprar arroz"}, {nome: "Levar nosso filho ao médico"}],
        "completed": "false"
    },
    {
        "userId": "mirela-marques",
        "id": 2,
        "title": [{nome: "Cortar o cabelo"}, {nome:"Ir ao circo"}, {nome: "Fugir da chuva"}],
        "completed": "true"
    },
    {
        "userId": "felipe-cavanhaque",
        "id": 3,
        "title": [{nome:"Lavar o carro"}, {nome: "Viajar para o Paraguai"}, {nome:"Abastecer o carro"}],
        "completed": "false"
    },
    {
        "userId": "gengivite-fernandes",
        "id": 4,
        "title": [{nome:"Levar o cachorro para passear"}, {nome:"Jogar na Mega"}, {nome:"Ir a praia"}],
        "completed": "true"
    },
    {
        "userId": "paloma-angel",
        "id": 5,
        "title": [{nome:"Pintar o muro da casa"}, {nome:"Fazer churrasco com os amigos"}, {nome:"Terminar o livro"}],
        "completed": "false"
    },
] 