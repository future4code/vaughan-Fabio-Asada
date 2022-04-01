import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import {Extrato, Usuario, usuario} from "./data";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/users", (req:Request, res:Response) => {
    let codeError= 400;

    try{
        const nome: string= req.body.nome;
        const cpf: string= req.body.cpf;

        const dataAtual= new Date().getTime();
        const nascimentoArray: string[] = req.body.nascimento.split("/");
        const diaDoNascimento: number= +nascimentoArray[0];
        const mesDoNascimento: number= +nascimentoArray[1];
        const anoDoNascimento: number= +nascimentoArray[2];
        const nascimentoTimestamp: number= new Date(anoDoNascimento, mesDoNascimento + 1,  diaDoNascimento).getTime(); 
    
        const minutos: number= 1000 * 60;
        const hora: number= minutos * 60;
        const dia: number= hora * 24;
        const ano: number= dia * 365;
    
        const idade: number= Math.round((dataAtual - nascimentoTimestamp) / ano);
        const verificacaoDeCpf: Usuario[]= usuario.filter((obj:Usuario): boolean => obj.cpf === cpf);

        if(idade < 18){
            codeError= 422;
            throw new Error("Idade inferior a 18 anos.");

        }else if(verificacaoDeCpf.length){
            codeError= 422;
            throw new Error("Cpf inválido. Este cpf já foi cadastrado.");

        }else if(idade >= 18 && !verificacaoDeCpf.length){
            const diaFormatacao: string= diaDoNascimento.toString().length === 1? `0${diaDoNascimento}` : `${diaDoNascimento}`;
            const mesFormatacao: string= mesDoNascimento.toString().length === 1? `0${mesDoNascimento}` : `${mesDoNascimento}`;
            
            const novoUsuario: Usuario= {
                nome:nome,
                cpf:cpf,
                nascimento:`${diaFormatacao}/${mesFormatacao}/${anoDoNascimento}`,
                saldo:0,
                extrato:[{valor:0, data:"", descricao:""}],
            };

            usuario.push(novoUsuario);
            res.status(201).send(usuario);

        }else{
            codeError= 500;
            throw new Error("Ocorreu um erro. Tente novamente mais tarde.")
        }
    }catch(error: any){
        res.status(codeError).send(error.message);
    }
});

app.get("/users/saldo", (req:Request, res:Response) => {
    let codeError= 400;

    try{
        const nome:string= req.body.nome;
        const cpf: string= req.body.cpf;

        const verificacaoDeUsuario: Usuario[]= usuario.filter((obj:Usuario): boolean => obj.nome === nome && obj.cpf === cpf);

        if(!verificacaoDeUsuario.length){
            codeError= 422;
            throw new Error("Nome e Cpf inválidos. Usuário não cadastrado.");

        }else if(verificacaoDeUsuario.length){

            res.status(200).send({saldo: verificacaoDeUsuario[0].saldo});
        }else{
            codeError= 500;
            throw new Error("Ocorreu um erro. Tente novamente mais tarde.")
        };

    }catch(error: any){
        res.status(codeError).send(error.message);
    };
});

app.put("/users/saldo", (req:Request, res:Response) => {
    let codeError= 400;

    try{

        const nome:string= req.body.nome;
        const cpf: string= req.body.cpf;
        const saldo: number= req.body.saldo;

        const verificacaoDeUsuario: Usuario[]= usuario.filter((obj:Usuario): boolean => obj.nome === nome && obj.cpf === cpf);

        if(!verificacaoDeUsuario.length){
            codeError= 422;
            throw new Error("Nome e Cpf inválidos. Usuário não cadastrado.");

        }else if(verificacaoDeUsuario.length){
            res.status(200).send({...verificacaoDeUsuario[0], saldo: verificacaoDeUsuario[0].saldo + saldo});
            
        }else{
            codeError= 500;
            throw new Error("Ocorreu um erro. Tente novamente mais tarde.")
        };

    }catch(error: any){
        res.status(codeError).send(error.message);
    };
});



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});