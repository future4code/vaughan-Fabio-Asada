import { Request, Response } from "express";
import connection from "../connection";
import {validateEmail} from "../services/validateEmail";

export const addAnotherEmail= async (req: Request, res: Response): Promise<void> => {
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

        // 2- Fazer as validações do email.
        const {second_email}= req.body;

        if(validateEmail(second_email)){
            res.status(400).send(validateEmail(second_email));
            return;
        };
        
        // 3- Adicionar uma coluna na tabela
        await connection.raw(`ALTER TABLE Usuarios ADD COLUMN second_email VARCHAR(255) UNIQUE`)
            .then(() => console.log("Tabela alterada com sucesso."))
            .catch(error => console.log(error));

        // 4- Verificar se esse email, já não está cadastrado na tabela.
        const usuario= await connection("Usuarios")
            .select("*")
            .where({id})
            .then(data => data[0])
            .catch((error:any) => {
                console.log(error.message || error.sqlMessage);
            });

        if(usuario.second_email){
            codeError= 422;
            throw new Error("Campo second_email já está preenchido.");
        }

        // 5- Inserir segundo email na tabela.
        await connection("Usuarios")
            .update({
                ...usuario,
                second_email: second_email,
            })
            .where({id})
            .then(() => res.status(200).send({message:"Segundo email adicionado com sucesso!"}))
            .catch(() => res.status(422).send({message:"Não foi possível adicionar um segundo email!"}));
            
        res.status(200).send("Ok");

    }catch(error: any){
        res.status(codeError).send(error.message || error.sqlMessage);
    }
}