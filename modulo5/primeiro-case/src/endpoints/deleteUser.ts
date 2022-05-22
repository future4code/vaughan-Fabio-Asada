import { Request, Response } from "express";
import connection from "../connection";

export const deleteUser= async (req: Request, res: Response): Promise<void> => {
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

        // 2- Deletar usuário da tabela.
        await connection("Usuarios")
            .delete()
            .where({id})
            .then(() => res.status(200).send({message:"Usuário deletado com sucesso!"}))
            .catch(() => res.status(422).send({message:"Não foi possível deletar usuário."}));

    }catch(error: any){
        res.status(codeError).send(error.message || error.sqlMessage);
    }
}