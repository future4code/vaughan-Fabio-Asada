type Post= [
    {
        autor: string,
        texto: string,
        
    }
];

const postagem: Post= [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    }
]


type Posts= [
    {
        autor: string,
        texto: string,
    },
    {
        autor: string,
        texto: string,
    },
    {
        autor: string,
        texto: string,
    },
    {
        autor: string,
        texto: string,
    },
    {
        autor: string,
        texto: string,
    }
]

const posts: Posts = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
];

function buscarPostsPorAutor(posts: Posts, autorInformado:string): Post{
    let personagem:Post;
    
    for(let i=0; i < posts.length; i++){
        if(posts[i].autor === autorInformado){
            personagem= [posts[i]];
        }
    };

    return personagem;
};

console.log(buscarPostsPorAutor(posts, "Hermione Granger"));