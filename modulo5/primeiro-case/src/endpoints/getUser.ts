import { Request, Response } from "express";
import connection from "../connection";

export const getUser= async (req:Request, res: Response): Promise<void> => {
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

        // 2- Pegando usuário no banco de dados.
        const users= await connection("Usuarios")
            .select("*")
            .where({id})
            .then(data => data[0])
            .catch((error:any) => {
                console.log(error.message || error.sqlMessage);
            });
            
        res.status(200).send(users);   

    }catch(error: any){
        res.status(codeError).send(error.message || error.sqlMessage);
    }
}