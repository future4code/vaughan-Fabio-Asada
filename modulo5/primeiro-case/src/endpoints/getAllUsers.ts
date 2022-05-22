import { Request, Response } from "express";
import connection from "../connection";

export const getAllUsers= async (req:Request, res: Response): Promise<void> => {
    let codeError: number = 400;

    try{
        // Pegando todos os usuários do banco de dados.
        const users= await connection("Usuarios")
            .select("*")
            .then(data => data)
            .catch((error:any) => {
                console.log(error.message || error.sqlMessage);
            });
            
        res.status(200).send(users);   

    }catch(error: any){
        res.status(codeError).send(error.message || error.sqlMessage);
    }
}