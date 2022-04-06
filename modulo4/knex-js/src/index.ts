import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import connection from "./connection";

const app: Express = express();

app.use(express.json());
app.use(cors());

/*
Exercício 1

a - Quando usamos o raw, a resposta do banco de dados, vem acompanhada com outras informações, então é necessário lapidar essas informações. 
*/

// b
app.get("/users", async (req:Request, res:Response): Promise<void> => {

    try{
        const name: string= req.body.name;

        const resultado= await connection.raw(`
            SELECT * FROM Actor WHERE name = "${name}"   
        `)

        res.status(200).send(resultado[0][0]);
    }catch(error: any){
        res.status(500).send(error.sqlMessage || error.message);
    }
});

// c
app.get("/users/gender", async (req:Request, res:Response): Promise<void> => {

    try{
        const gender: string= req.body.gender;

        const resultado= await connection.raw(`
            SELECT COUNT(*) AS gender FROM Actor WHERE gender = "${gender}" 
        `)

        
        res.status(200).send(resultado[0][0]);
    }catch(error: any){
        res.status(500).send(error.sqlMessage || error.message);
    }
});


// Exercício 2

// a
app.put("/users/:id/salario", async (req: Request, res: Response): Promise<void> => {

    try{
        await connection("Actor")
        .update({salary: req.body.salary})
        .where({id:req.params.id});

        res.status(201).send(`Atualização feita com sucesso.`);
    }catch(error: any){
        res.status(500).send(error.sqlMessage || error.message);
    }
});

// b
app.delete("/users/:id", async (req: Request, res: Response): Promise<void> => {

    try{
        await connection("Actor")
        .delete()
        .where({id:req.params.id});

        res.status(200).send(`Ator deletado da tabela.`);

    }catch(error:any){
        res.status(500).send(error.sqlMessage || error.message);
    }
});

// c
app.get("/users/:gender/media_salario", async(req: Request, res: Response): Promise<void> => {

    try{
        const resultado= await connection("Actor")
        .avg("salary as salary")
        .where({gender:req.params.gender});

        res.status(200).send(resultado[0]);

    }catch(error: any){
        res.status(500).send(error.sqlMessage || error.message);
    }
});

// Exercício 3

// a 
app.get("/actor/:id", async (req: Request, res: Response): Promise<void> => {
    try{
        const ator= await connection("Actor")
        .where({id:req.params.id});

        res.status(200).send(ator[0]);
    }catch(error: any){
        res.status(500).send(error.sqlMessage || error.message);
    }
});

// b

app.get("/actor", async (req:Request, res:Response): Promise<void> => {

    try{
        const quantidade= await connection("Actor")
        .count(`gender as ${req.query.gender}`)
        .where({gender:req.query.gender});

        res.status(200).send(quantidade);
    }catch(error: any){
        res.status(500).send(error.sqlMessage || error.message);
    }
});

// Exercício 4

// a
app.put("/actor/atualiza/salario", async (req: Request, res: Response): Promise<void> => {

    try{
        await connection("Actor")
        .update({salary: req.body.salary})
        .where({id:req.body.id});

        res.status(201).send(`Atualização feita com sucesso.`);
    }catch(error: any){
        res.status(500).send(error.sqlMessage || error.message);
    }
});


// b
app.delete("/actor/:id", async (req: Request, res: Response): Promise<void> => {

    try{
        await connection("Actor")
        .delete()
        .where({id:req.params.id});

        res.status(200).send(`Ator deletado da tabela.`);

    }catch(error:any){
        res.status(500).send(error.sqlMessage || error.message);
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