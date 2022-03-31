import express, {Express, Request, Response} from "express";
import cors from "cors";

const app:Express= express();

app.use(express.json());
app.use(cors());

type Usuarios= [
    {
        id:number,
        name:string,
        phone:string,
        email:string,
        website:string,
    },
    {
        id:number,
        name:string,
        phone:string,
        email:string,
        website:string,
    },
    {
        id:number,
        name:string,
        phone:string,
        email:string,
        website:string,
    },
    {
        id:number,
        name:string,
        phone:string,
        email:string,
        website:string,
    },
    {
        id:number,
        name:string,
        phone:string,
        email:string,
        website:string,
    },
]

const usuarios:Usuarios = [
    {
        id:1,
        name:"Felix Nonato",
        phone:"55555555-5555",
        email:"felix@gmail.com",
        website:"www.felixnonato.com.br"

    },
    {
        id:2,
        name:"Akemi Takamoto",
        phone:"22222222-2222",
        email:"akemi@gmail.com",
        website:"www.takamotoakemi.com.br"

    },
    {
        id:3,
        name:"Luan Gastrite",
        phone:"888888-7777",
        email:"gastritex@gmail.com",
        website:"www.luangastrite.com.br"

    },
    {
        id:4,
        name:"Elaine Marcondes",
        phone:"1111111-11111",
        email:"elaine@gmail.com",
        website:"www.marcondes.com"

    },
    {
        id:5,
        name:"Roger Federer",
        phone:"33333-3333",
        email:"federer@gmail.com",
        website:"www.rg.com"

    },
];

type Posts= [
    {
        "userId":number,
        "id":number,
        "title":string,
        "body":string,
    },
    {
        "userId":number,
        "id":number,
        "title":string,
        "body":string,
    },
    {
        "userId":number,
        "id":number,
        "title":string,
        "body":string,
    },
    {
        "userId":number,
        "id":number,
        "title":string,
        "body":string,
    },
    {
        "userId":number,
        "id":number,
        "title":string,
        "body":string,
    },
]

const posts: Posts= [
    {
        "userId":1,
        "id":1,
        "title":"A viagem de Jhon.",
        "body":"itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
    },
    {
        "userId":1,
        "id":2,
        "title":"Pães frescos de manhã",
        "body":"fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
    },
    {
        "userId":1,
        "id":3,
        "title":"Acontecimentos mais inusitados desta vida.",
        "body":"reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
    },
    {
        "userId":1,
        "id":4,
        "title":"Lasanha de carne moída.",
        "body": "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo",
    },
    {
        "userId":1,
        "id":5,
        "title":"Futebol com os amigos",
        "body":"eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse",
    },
]

// Exercício 01
app.get("/", (req:Request, res:Response) => {
    res.status(200).send("Endpoint criado com sucesso!!!!! Oh Yeah!");
})

// Exercício 02
// Tipagem criada!

// Exercício 03
// Array de usuários criado!

//Exercício 04
app.get("/users", (req:Request, res:Response) => {
    res.status(200).send(usuarios);
});

//Exercício 05
// Tipagem criada!

//Exercício 06
// Array de posts criado!
// Eu acho melhor fazer separado, fica mais fácil de se trabalhar e de fácil visualizaçção.

//Exercício 07
app.get("/posts", (req:Request, res:Response) => {
    res.status(200).send(posts);
});

//Exercício 08
app.get("/posts/:id", (req:Request, res:Response) => {
    const id= req.params.id;
    let usuario

    for(let i=0; i < posts.length; i++){
        if(posts[i].id === +id){
            usuario= [posts[i]];
        }
    };
    
    res.status(200).send(usuario);
});


app.listen(3003, () => {
    console.log("O backend está rodando na porta 3003")
})