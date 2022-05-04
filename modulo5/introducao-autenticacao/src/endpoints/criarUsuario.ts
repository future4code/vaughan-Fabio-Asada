import { Request, Response } from "express";
import connection from "../connection";
import { gerarId } from "../gerarId/gerarId";
import { criarTabelas } from "../Data/migrations";
import { gerarToken } from "../service/gerarToken"; 

export const criarUsuario= async (req:Request, res:Response): Promise<void> => {
    let codeError: number= 400;
    try{
        const {email, password} = req.body;
        
        if(!email.includes("@") || !email){
            codeError= 422;
            throw new Error('Email vazio ou que não possua um "@"');

        }else if(password.length < 6){
            codeError= 422;
            throw new Error('Senha deve ter 6 caracteres ou mais');

        }else if(email.includes("@") && email && password.length >= 6){
            const id= gerarId();

            await criarTabelas();

            connection("Usuarios")
                .insert([{id, email, password}])
                .then(() => console.log("Usuário criado com sucesso."))
                .catch((error:any) => {
                    console.log(error.message || error.sqlMessage);
                })

            const token= gerarToken({id});
            res.status(201).send({"token":`${token}`});

        }else{
            codeError= 500;
            throw new Error('Ocorreu um erro. Tente novamnete mais tarde.');
        };

    }catch(error: any){
        res.status(codeError).send(error.message || error.sqlMessage);
    }
}