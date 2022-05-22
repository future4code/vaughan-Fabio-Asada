import { Request, Response } from "express";
import connection from "../connection";
import { validationResult } from 'express-validator';

export const addAnotherPhone= async (req: Request, res: Response): Promise<void> => {
    let codeError: number = 400;

    try{
        // 1- Verificar se o usuário existe na tabela.
        const {id}= req.params;

        const verifyUserInTable= await connection("Usuarios")
            .where({id})
            .then(data => data)
            .catch(error => error);
        
        if(!verifyUserInTable.length){
            codeError= 409;
            throw new Error("Usuário não encontrado.");
        }; 

        // 2- Fazer as validações do telefone.
        const error= validationResult(req);

        if(!error.isEmpty()){
            res.status(400).send(error.array()[0].msg);
            return;
        };

        const {second_phone}= req.body;

        // 3- Adicionar uma coluna na tabela
        await connection.raw(`ALTER TABLE Usuarios ADD COLUMN second_phone INT`)
            .then(() => console.log("Tabela alterada com sucesso."))
            .catch(error => console.log(error));

        // 4- Verificar se esse número de telefone, já não está cadastrado na tabela.
        const usuario= await connection("Usuarios")
            .select("*")
            .where({id})
            .then(data => data[0])
            .catch((error:any) => {
                console.log(error.message || error.sqlMessage);
            });

        if(usuario.second_phone){
            codeError= 422;
            throw new Error("Campo second_phone já está preenchido.");
        }

        // 5- Inserir segundo número na tabela.
        await connection("Usuarios")
            .update({
                ...usuario,
                second_phone: second_phone,
            })
            .where({id})
            .then(() => res.status(200).send({message:"Segundo telefone adicionado com sucesso!"}))
            .catch(() => res.status(422).send({message:"Não foi possível adicionar um segundo telefone!"}));
            
    }catch(error: any){
        res.status(codeError).send(error.message || error.sqlMessage);
    }
}