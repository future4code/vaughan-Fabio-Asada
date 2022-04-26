import { Request, Response} from "express"
import {verificarToken} from "../services/verificarToken";
import connection from "../connection";
import {USER_ROLES} from "../Tipos/tipos";

export const retornaDados= async (req: Request, res:Response): Promise<void> => {
    let codeError: number= 400;
    try{
        const dados = String(req.headers.authorization);
        const {id, role}= verificarToken(dados);

        if(role !== USER_ROLES.ADMIN){
            res.status(403).send("Area Proibida. Você não possui acesso.");
        }

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