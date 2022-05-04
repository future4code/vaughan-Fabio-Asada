import { Request, Response } from "express";
import connection from "../connection";
import { gerarId } from "../gerarId/gerarId";
import { criarTabelas } from "../Data/migrations";
import { gerarToken } from "../services/gerarToken"; 
import {Hash} from "../services/Hash";

export const criarUsuario= async (req:Request, res:Response): Promise<void> => {
    let codeError: number= 400;
    try{
        const {email, password, role} = req.body;
        
        if(!email.includes("@") || !email){
            codeError= 422;
            throw new Error('Email vazio ou que não possua um "@"');

        }else if(!role){
            codeError= 422;
            throw new Error('Role vazio.');

        }else if(password.length < 6){
            codeError= 422;
            throw new Error('Senha deve ter 6 caracteres ou mais');

        }else if(email.includes("@") && email && password.length >= 6 && role){
            const id= gerarId();
            const senha= new Hash();
            const senhaCifrada: string= senha.generateHash(password); 

            await criarTabelas();

            connection("Usuarios")
                .insert([{id, email, password:senhaCifrada, role}])
                .then(() => console.log("Usuário criado com sucesso."))
                .catch((error:any) => {
                    console.log(error.message || error.sqlMessage);
                })

            const token= gerarToken({id, role});
            res.status(201).send({"token":`${token}`});

        }else{
            codeError= 500;
            throw new Error('Ocorreu um erro. Tente novamnete mais tarde.');
        };

    }catch(error: any){
        res.status(codeError).send(error.message || error.sqlMessage);
    }
}