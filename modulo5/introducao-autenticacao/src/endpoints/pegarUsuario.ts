import { Request, Response } from "express"
import connection from "../connection";
import {gerarToken} from "../service/gerarToken";

export const pegarUsuario= async (req: Request, res: Response): Promise<void> => {
    let codeError: number= 400;
    try{
        const {email, password} = req.body;

        connection("Usuarios")
            .where({email})
            .then(data => {
                const id= {id:data[0].id};

                if(!email.includes("@") || !email){
                    codeError= 422;
                    throw new Error('Email vazio ou que não possua um "@"');
        
                }else if(email.includes("@") && email){
                    
                    const token= gerarToken(id);
                    res.status(201).send({"token":`${token}`});
        
                }else{
                    codeError= 500;
                    throw new Error('Ocorreu um erro. Tente novamnete mais tarde.');
                };
            
            })
            .catch((error:any) => {
                console.log(error.message || error.sqlMessage);
            });

    }catch(error: any){
        res.status(codeError).send(error.message || error.sqlMessage);
    }
}