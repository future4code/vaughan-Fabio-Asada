import express, {Request, Response} from "express";
import cors from "cors";
import {Afazeres, afazeres} from "./afazeres"

const app= express();

app.use(express.json());
app.use(cors());

//Exercício 01
app.get("/ping", (req:Request, res:Response) => {
    res.status(200).send("Pong!!!! 🏓");
});


//Exercício 04
app.get("/:afazer", (req:Request, res:Response) => {
    const completed: string= req.params.afazer;
    const resultado: Afazeres[]= afazeres.filter(obj => obj.completed === completed)
    
    res.status(200).send(resultado);
});

//Exercício 05
app.post("/novoafazer", (req:Request, res:Response) => {
    const autorizacao= req.headers.authorization;
    const {userId, title, completed} = req.body;
    const novoAfazer:Afazeres ={userId, id:afazeres.length + 1, title, completed};

    res.status(200).send([...afazeres, novoAfazer]);
}); 

//Exercício 06
app.put("/afazeres/completed/:id", (req:Request, res:Response) => {
    const autorizacao= req.headers.authorization;
    const id= +req.params.id;
    const completed= req.body.completed;

    const atualizacao: Afazeres[] = afazeres.map(obj => {
        if(obj.userId === autorizacao){
            return {...obj, completed:completed};
        };

        return obj;
    })
    
    res.status(200).send(atualizacao);
});

//Exercício 07
app.delete("/afazeres/delete/:id", (req:Request, res:Response) => {
    const autorizacao=req.headers.authorization;
    const id= +req.params.id;
    
    const novaLista: Afazeres[]= afazeres.filter(obj => obj.id !== id);

    res.status(200).send(novaLista);
});

//Exercício 08 e 10
app.get("/afazeres/usuario/:id", (req:Request, res:Response) => {
    const autorizacao=req.headers.authorization;
    const id= +req.params.id;
    let selectedUser;
    let others: any= [];

    afazeres.forEach(obj => {
        if(obj.id === id){
            selectedUser= [...obj.title];

        }else{
            others.push(...obj.title)
        }
    });

    res.status(200).send({todos:{selectedUser, others}});
});


app.listen(3003, () => {
    console.log("Backend rodando na porta 3003.")
});
