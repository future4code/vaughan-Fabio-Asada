import { Request, Response } from "express";
import { Token } from "../services/Token";
import connection from "../connection";


export const perfilDeOutros= async (req: Request, res: Response): Promise<void> => {
    let codeError: number= 400; 

    try{
        const {id}= req.params;
        const {authorization}= req.headers;

        // 1- Fazer a verificacao do token. Se der tudo certo, é retornado um objeto com a propriedade id. Se der qualquer problema com o Token, automaticamente é lançado um erro no catch.
        const intanciaToken= new Token();
        const verificacao = intanciaToken.verificarToken(authorization as string);

        // 2- Verificar se usuário existe no banco de dados. Através do id passado pelo usuário.
        const usuario: any= await connection("Usuarios_Cookenu")
            .select("id","name","email")
            .where({id})
            .then(data => data)
            .catch((error:any) => {
                console.log(error.message || error.sqlMessage);
            })

        if(!usuario.length){
            codeError= 409;
            throw new Error("Usuário não encontrado.");
        };

        // 3- Retorna um objeto com id, name e email.
        res.status(200).send(usuario[0]);

    }catch(error: any){
        res.status(codeError).send(error.message || error.sqlMessage);
    }
}