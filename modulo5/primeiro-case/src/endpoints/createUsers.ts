import { Request, Response } from "express";
import connection from "../connection";
import {createTable} from "../Data/migrations";
import {CreateIds} from "../services/createId";
import {User} from "../entities/User";
import { validationResult } from 'express-validator';
import {allValidateCpf} from "../services/validateCpf";
import {validateEmail} from "../services/validateEmail";

export const createUsers= async (req: Request, res: Response): Promise<void> => {
    let codeError: number = 400;

    try{
        //1- Criar tabela.
        await createTable();

        // 2- Fazer as validações.
        const error= validationResult(req);

        if(!error.isEmpty()){
            res.status(400).send(error.array()[0].msg);
            return;
        };

        const {name, surname, cpf, email, phone}= req.body;
        
        // 3- Validar cpf
        if(allValidateCpf(cpf)){
            res.status(400).send(allValidateCpf(cpf));
            return;
        };

        // 4 Validar email
        if(validateEmail(email)){
            res.status(400).send(validateEmail(email));
            return;
        };
        

        // 5- Verificar se esse usuário, já está cadastrado no banco de dados.
        const checkUserInTable= await connection("Usuarios")
            .where({name})
            .then(data => data)
            .catch(error => error);
        
        if(checkUserInTable.length){
            codeError= 409;
            throw new Error("Usuário já cadastrado na tabela.");
        };

        // 6- Criar id.
        const generateId= new CreateIds();
        const id= generateId.id();

        // 7- criar Usuário.
        const newUser= new User(id, name, surname, phone, cpf, email);

        // 8- Inserir usuário na tabela.
        await connection("Usuarios")
            .insert([{
                id:newUser.idUser,
                name:newUser.nameUser,
                surname:newUser.surnameUser,
                cpf:newUser.cpfUser,
                email:newUser.emailUser,
                phone:newUser.phoneUser
            }])
            .then(() => console.log("Usuário criado com sucesso."))
            .catch((error:any) => {
                console.log(error.message || error.sqlMessage);
            })

        // 9- Retornar mensagem de que deu tudo certo.
        res.status(201).send({message: "Usuário criado com sucesso."});

    }catch(error: any){
        res.status(codeError).send(error.message || error.sqlMessage);
    }
};