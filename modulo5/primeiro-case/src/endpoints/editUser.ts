import { Request, Response } from "express";
import connection from "../connection";
import { validationResult } from 'express-validator';
import {allValidateCpf} from "../services/validateCpf";
import {validateEmail} from "../services/validateEmail";

export const editUser= async (req: Request, res: Response): Promise<void> => {
    let codeError: number = 400;

    try{
        // 1- Verificar se o id, é de algum usuário na tabela.
        const {id}= req.params;

        const verifyUserInTable= await connection("Usuarios")
            .where({id})
            .then(data => data)
            .catch(error => error);

        if(!verifyUserInTable.length){
            codeError= 409;
            throw new Error("Usuário não encontrado.");
        }; 

        // 2- Fazer as validações.
        const error= validationResult(req);

        if(!error.isEmpty()){
            res.status(400).send(error.array()[0].msg);
        };

        const {name, surname, cpf, email, phone}= req.body;
        
        // 3- Validar cpf
        if(allValidateCpf(cpf)){
            res.status(400).send(allValidateCpf(cpf));
            return;
        };

        // 4 Validar email
        if(validateEmail(email)){
            res.status(400).send(validateEmail(email));
            return;
        };

        // 5- Editar informações
        await connection("Usuarios")
            .update({name, surname, cpf, email, phone})
            .where({id})
            .then(() => res.status(200).send({message:"Usuário atualizado com sucesso!"}))
            .catch((error) => res.status(422).send({message:error}));


    }catch(error: any){
        res.status(codeError).send(error.message || error.sqlMessage);
    }
}