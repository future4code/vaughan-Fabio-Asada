import { Request, Response } from "express";
import {cadastrarUsuarioNaTabela} from "../Data/migrations";

export const cadastrarUsuario= async (req: Request, res: Response): Promise<void> => {
    let codeError= 400;
    try{
        const {nome, email, password}= req.body;
        const id= String(Date.now());

        if(!nome || !email || !password){
            codeError= 422;
            throw new Error(`${nome? "Nome preenchido corretamente.\n": "Preencha corretamente o campo nome.\n"} ${email? "Email preenchido corretamente.\n": "Preencha corretamente o campo email.\n"} ${password ? "Password preenchido corretamente.\n": "Preencha corretamente o campo password.\n"}`);

        }else if(nome && email && password){
            cadastrarUsuarioNaTabela({id, nome, email, password});
            res.status(200).send({message:"Usuário cadastrado."});
        
        }else{
            codeError= 500;
            throw new Error("Rapaz, não faço a menor idéia do que aconteceu.");
        }

    }catch(error: any){
        res.status(codeError).send(error.sqlMessage || error.message);
    };
};