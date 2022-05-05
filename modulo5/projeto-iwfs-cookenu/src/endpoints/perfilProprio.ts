import { Request, Response } from "express";
import {Token} from "../services/Token";
import connection from "../connection";

export const perfilProprio= async (req: Request, res: Response): Promise<void> => {
    let codeError: number= 400; 

    try{
        const {authorization}= req.headers;

        // 1- Extrai o id do token e faz a verificação.
        const extrairId= new Token();
        const {id}= extrairId.verificarToken(authorization as string);

        // 2- Buscar as informações do usuário no banco de dados, através do "id".
        const usuario: any= await connection("Usuarios_Cookenu")
            .select("id","name","email")
            .where({id})
            .then(data => data)
            .catch((error:any) => {
                console.log(error.message || error.sqlMessage);
            });

        // 3- Retorna um objeto com id, name e email.
        res.status(201).send(usuario[0]);

    }catch(error: any){
        res.status(codeError).send(error.message || error.sqlMessage);
    }
}