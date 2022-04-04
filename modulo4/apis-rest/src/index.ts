import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import {Tipos, Users, users} from "./data";

const app: Express = express();

app.use(express.json());
app.use(cors());

// Exercício 1
// a. Qual método HTTP você deve utilizar para isso?
// Você deve usar o método "get". Pois é ele que irá fazer a requisição, para poder retornar todos os usuários.

// b. Como você indicaria a **entidade** que está sendo manipulada?
// "/users", pois representa todos os usuários.

app.get("/users", (req: Request, res: Response) => {
    let errorCode: number= 400;
    try{
        if(!users){
            errorCode= 404;
            throw new Error("Usuários não encontrados!");
        };

        errorCode= 200;
        res.status(errorCode).send(users);

    }catch(error: any){
        res.status(errorCode).send(error.message);
    }
});

// Exercício 3
// a- Busca por nome, costumam-se usar os querys parametros.

app.get("/users/nome", (req: Request, res: Response) => {
    let codeError: number=400;

    try{
        const name: string= req.query.name as string;

        if(!name){
            codeError = 422;
            throw new Error("Campo de nome vazio.");
        }

        const listaFiltrada: Users[]= users.filter(obj => obj.name.toLowerCase().includes(name.toLowerCase()));

        if(!listaFiltrada.length){
            codeError= 404;
            throw new Error("Usuário não encontrado!");
        };

        res.status(200).send(listaFiltrada);

    }catch(error: any){
        res.status(codeError).send(error.message);
    };
});

// Exercício 2
// a - Como você passou os parâmetros de type para a requisição? Por quê?
// Eu achei melhor passar por "params", pois se eu fosse usar "query", meu endpoint iria ficar parecido com o endpoint de buscar usuários.

// b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
// Basta você usar o enum do Tipescript. Ele ajuda você deixar mais específica a sua entrada de dados.

app.get("/users/:type", (req: Request, res: Response) => {
    let codeError: number= 400;

    try{
        let type: string= req.params.type;

        if(type === "ADMIN"){
            codeError= 200;
            const admin: Users[]= users.filter(obj => obj.type === type);
            res.status(codeError).send(admin);

        }else if(type === "NORMAL"){
            codeError= 200;
            const normal: Users[]= users.filter(obj => obj.type === type);
            res.status(codeError).send(normal);
        }else{
            codeError= 404;
            throw new Error("Type não corresponde com os valores cadastrados.");
        }

    }catch(error:any){
        res.status(codeError).send(error.message);
    }
});

// Exercício 4
// a- Ele quebra. Não funciona.
// b- Não, pois o método Put serve mais para atualizar dados. E o Post é próprio para a criação de dados.

app.post("/users/adicionar", (req: Request, res: Response) => {
    let codeError:number= 400;
    try{
        const id: number= users.length + 1;
        const name: string= req.body.name;
        const email:string= req.body.email;
        const type: Tipos= req.body.type;
        const age:number= +req.body.age;

        if(!name || !email || !type || !age){
            codeError = 422;
            throw new Error("Preencha corretamente os campos.");
        };

        codeError = 201;
        users.push({id, name, email, type, age});
        res.status(codeError).send(users);

    }catch(error: any){
        res.status(codeError).send(error.message);
    }
});

// Exercício 5

app.put("/users/:id/alterar", (req: Request, res: Response) => {
    let codeError: number= 400;

    try{
        const id: number= +req.params.id;
        const name: string= req.body.name;
        const email:string= req.body.email;
        const type: Tipos= req.body.type;
        const age:number= +req.body.age;

        if(!id || !name || !email || !type || !age){
            codeError = 422;
            throw new Error("Preencha os campos corretamente."); 
        };

        const alterarUsuario: Users[]= users.map(obj => {
            if(obj.id === id){
                return {
                    id: obj.id,
                    name: name,
                    email: email,
                    type: type,
                    age: age,
                }
            }

            return obj;
        });

        res.status(201).send();

    }catch(error: any){
        res.status(codeError).send(error.message);
    }

});

// Exercício 6

app.patch("/users/:id/alterar", (req: Request, res: Response) => {
    let codeError: number= 400;

    try{
        const id: number= +req.params.id;
        const name: string= req.body.name;
        const email:string= req.body.email;
        const type: Tipos= req.body.type;
        const age:number= +req.body.age;

        if(!id || !name || !email || !type || !age){
            codeError = 422;
            throw new Error("Preencha os campos corretamente."); 
        };

        const alterarUsuario: Users[]= users.map(obj => {
            if(obj.id === id){
                return {
                    id: obj.id,
                    name: name,
                    email: email,
                    type: type,
                    age: age,
                }
            }

            return obj;
        });

        res.status(201).send(alterarUsuario);

    }catch(error: any){
        res.status(codeError).send(error.message);
    }

});

// Exercício 7

app.delete("/users/:id/deletar", (req: Request, res: Response) => {
    let codeError: number= 400;

    try{
        const id: number= +req.params.id;

        if(!id){
            codeError = 422;
            throw new Error("Informe o id corretamente."); 
        };

        const deletarUsuario: Users[]= users.filter(obj => obj.id !== id);

        res.status(201).send(deletarUsuario);

    }catch(error: any){
        res.status(codeError).send(error.message);
    }
});


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});