import { verificarToken } from './../services/verificarToken';
import { Request, Response } from "express"
import connection from "../connection";
import {gerarToken} from "../services/gerarToken";
import {Hash} from "../services/Hash";

export const pegarUsuario= async (req: Request, res: Response): Promise<void> => {
    let codeError: number= 400;
    try{
        const {email, password} = req.body;

        connection("Usuarios")
            .where({email})
            .then(data => {
                const senhaSalvaNoBanco= data[0].password;
                const roleSalvaNoBanco= data[0].role;
                const payload= {
                    id:data[0].id,
                    role:roleSalvaNoBanco
                }

                const newHash= new Hash();
                const verificacao: boolean= newHash.compararHash(password, senhaSalvaNoBanco); 

                if(!email.includes("@") || !email){
                    codeError= 422;
                    throw new Error('Email vazio ou que não possua um "@"');
        
                }else if(!verificacao){
                    codeError= 422;
                    throw new Error('Senha incorreta. Tente novamente.');

                }else if(email.includes("@") && email && verificacao){
                    
                    const token= gerarToken(payload);
                    res.status(201).send({"token":`${token}`});
    
                }else{
                    codeError= 500;
                    throw new Error('Ocorreu um erro. Tente novamnete mais tarde.');
                };
            
            })
            .catch((error:any) => {
                res.status(codeError).send(error.message || error.sqlMessage);
            });

    }catch(error: any){
        res.status(codeError).send(error.message || error.sqlMessage);
    }
}