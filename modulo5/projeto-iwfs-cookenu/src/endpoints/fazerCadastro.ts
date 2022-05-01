import { Request, Response } from "express";
import {criarTabelas} from "../Data/migrations";
import connection from "../connection";
import {GerarIds} from "../services/GerarIds";
import {Hash} from "../services/Hash";
import {Token} from "../services/Token";
import {User} from "../entities/User";

export const fazerCadastro= async (req: Request, res:Response): Promise<void> => {
    let codeError: number= 400; 

    try{
        const {name, email, password}= req.body;

        // 1- Verificar se name, email, password, estão vazias.
        if(!name || !email || !password){
            codeError= 422;
            throw new Error("Prencha os campos 'name', 'email', 'password' corretamente.");
        };
        
        // 2- Verificar se email possuí '@'.
        if(!email.includes("@")){
            codeError= 422;
            throw new Error("O campo 'email' necessita ter uma '@'.");
        }

        // 3- Verificar se password possuí, no mínimo, 6 caracteres.
        if(password.length < 6){
            codeError= 422;
            throw new Error("'Password' necessita ter, no mínimo, 6 caracteres.");
        };

        // 4- Verificar se esse usuário já está cadastrado no banco de dados.
        await criarTabelas();
        const usuarioCadastradoNaTabela= await connection("Usuarios_Cookenu")
            .where({email})
            .then(data => data)
            .catch(error => error)

        if(usuarioCadastradoNaTabela.length){
            codeError= 409;
            throw new Error("Usuário já cadastrado na tabela.");
        }
        
        // 5- Criar id.
        const criarId= new GerarIds();
        const id= criarId.id();

        // 6- Codificar a senha.
        const senha= new Hash();
        const senhaCifrada= senha.gerarHash(password);
        
        // 7- Criar Token.
        const novoToken= new Token();
        const token= novoToken.gerarToken(id);

        // 8- criar Usuário.
        const usuario= new User(id, name, email, senhaCifrada);
        
        // 9- Inserir usuário na tabela.
        await connection("Usuarios_Cookenu")
                .insert([{
                    id:usuario.pegarId, 
                    name:usuario.pegarName,
                    email:usuario.pegarEmail, 
                    password:usuario.pegarPassword
                }])
                .then(() => console.log("Usuário criado com sucesso."))
                .catch((error:any) => {
                    console.log(error.message || error.sqlMessage);
                })

        // 10- Retornar o token.
        res.status(201).send({"access_token":token});

    }catch(error:any){
        res.status(codeError).send(error.message || error.sqlMessage);
    }
}