import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import connection from "./connection";

const app: Express = express();

app.use(express.json());
app.use(cors());

// Exercício 1
// a)
app.get("/funcionarios",  async (req: Request, res: Response): Promise<void> => {
    let codeError= 500;
    try{
        const nome= req.query.nome;

        const resultado= await connection.raw(`
            SELECT * FROM aula48_exercicio WHERE name LIKE "${nome}"`);

        if(!resultado.length){
            codeError= 422;
            throw new Error("Nome não encontrado.");
        }
    
        res.status(200).send(resultado[0][0]);

    }catch(error: any){
        res.status(codeError).send({message:error.message});
    }
});

// b)
app.get("/:type/funcionarios",  async (req: Request, res: Response): Promise<void> => {
    let codeError= 500;
    try{
        const type= req.params.type;
        
        const resultado= await connection.raw(`
            SELECT * FROM aula48_exercicio WHERE type LIKE "${type}"`);

        if(!resultado.length){
            codeError= 422;
            throw new Error("Profissional não encontrado.");
        }

        res.status(200).send(resultado[0]);

    }catch(error: any){
        res.status(codeError).send(error.message || error.sqlMessage);
    }
});

// Exercício 2
app.get("/funcionario",  async (req: Request, res: Response): Promise<void> => {
    let codeError= 500;
    try{
        const nome= req.query.name;
        const type= req.query.type;
        

        if(!nome && !type){
            codeError= 200;
           
            const resultado= await connection.raw(`
            SELECT * FROM aula48_exercicio ORDER BY email ASC`);

            res.status(codeError).send(resultado[0]);

        }else if(!nome){
            codeError= 200;

            const resultado= await connection.raw(`
                SELECT * FROM aula48_exercicio WHERE type LIKE "${type}" ORDER BY email ASC`);

            res.status(codeError).send(resultado[0]);

        }else{
            codeError= 200;

            const resultado= await connection.raw(`
                SELECT * FROM aula48_exercicio WHERE name LIKE "${nome}" ORDER BY name ASC`);

            res.status(codeError).send(resultado[0]);
        }

    }catch(error: any){
        res.status(codeError).send(error.message || error.sqlMessage);
    }
});

// Exercício 3
app.get("/funcionarios/paginacao", async (req: Request, res: Response): Promise<void> => {
    let codeError= 500;

    try{
        let pagina= Number(req.query.pagina);
        
        if(!pagina){
            codeError= 422;
            throw new Error("Preencha o campo da página.");
        }

        const resultado= await connection.raw(`
            SELECT * FROM aula48_exercicio LIMIT 5 OFFSET ${5 * (pagina - 1)}`);

        res.status(200).send(resultado[0]);

    }catch(error: any){
        res.status(codeError).send(error.message || error.sqlMessage);
    }
});

// Exercício 4
app.get("/funcionarioslabenu",  async (req: Request, res: Response): Promise<void> => {
    let codeError= 500;
    try{
        const nome= req.query.name;
        const type= req.query.type;
        let ordem= req.query.ordem;
        let pagina= Number(req.query.pagina);

        if(!nome && !type && !ordem && !pagina){
            codeError= 200;
        
            const resultado= await connection.raw(`
            SELECT * FROM aula48_exercicio ORDER BY name ASC LIMIT 5 OFFSET 0`);

            res.status(codeError).send(resultado[0]);

        }else if(!nome){
            codeError= 200;

            if(!ordem){
                const resultado= await connection.raw(`
                SELECT * FROM aula48_exercicio WHERE type LIKE "${type}" ORDER BY email DESC LIMIT 5 OFFSET ${5 * (pagina - 1)}`);

                res.status(codeError).send(resultado[0]);
            }

            const resultado= await connection.raw(`
                SELECT * FROM aula48_exercicio WHERE type LIKE "${type}" ORDER BY email ${ordem} LIMIT 5 OFFSET ${5 * (pagina - 1)}`);

            res.status(codeError).send(resultado[0]);

        }else if(!type){
            codeError= 200;

            if(!ordem){
                const resultado= await connection.raw(`
                SELECT * FROM aula48_exercicio WHERE name LIKE "${nome}" ORDER BY email DESC LIMIT 5 OFFSET ${5 * (pagina - 1)}`);

                res.status(codeError).send(resultado[0]);
            }

            const resultado= await connection.raw(`
                SELECT * FROM aula48_exercicio WHERE name LIKE "${nome}" ORDER BY email ${ordem} LIMIT 5 OFFSET ${5 * (pagina - 1)}`);

            res.status(codeError).send(resultado[0]);

        }else{
            codeError= 200;

            const resultado= await connection.raw(`
                SELECT * FROM aula48_exercicio WHERE name LIKE "${nome}" AND type LIKE "${type}" ORDER BY name ${ordem} LIMIT 5 OFFSET ${5 * (pagina - 1)}`);

            res.status(codeError).send(resultado[0]);
        }

    }catch(error: any){
        res.status(codeError).send(error.message || error.sqlMessage);
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