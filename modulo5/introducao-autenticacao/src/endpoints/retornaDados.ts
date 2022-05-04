import { Request, Response} from "express"
import {verificarToken} from "../service/verificarToken";
import connection from "../connection";

export const retornaDados= async (req: Request, res:Response): Promise<void> => {
    let codeError: number= 400;
    try{
        const dados = String(req.headers.authorization);
        const {id}= verificarToken(dados);

        connection("Usuarios")
            .where({id})
            .then(data => {
                const {id, email}= data[0];
                res.status(200).send({id, email});
            })
            .catch((error:any) => {
                console.log(error.message || error.sqlMessage);
            });

    }catch(error: any){
        res.status(codeError).send(error.message || error.sqlMessage);
    }    
}