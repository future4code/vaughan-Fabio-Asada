import { Request, Response } from "express";
import connection from "../connection";
import {Hash} from "../services/Hash";
import {GerarIds} from "../services/GerarIds";
import {Token} from "../services/Token";

export const login= async (req: Request, res: Response): Promise<void> => {
    let codeError: number= 400;

    try{
        const {email, password}= req.body; 

        // 1- Verificar se email ou password, estão vazias.
        if(!email || !password){
            codeError= 422;
            throw new Error("Prencha os campos 'email' ou 'password' corretamente.");
        };

        // 2- Verificar se email possuí '@'.
        if(!email.includes("@")){
            codeError= 422;
            throw new Error("O campo 'email' necessita ter uma '@'.");
        }

        // 3- Verificar se esse email, já está cadastrado no banco de dados.
        const usuarioCadastradoNaTabela= await connection("Usuarios_Cookenu")
            .where({email})
            .then(data => data)
            .catch(error => error)

        if(!usuarioCadastradoNaTabela.length){
            codeError= 409;
            throw new Error("Email ou senha inválidos, faça seu cadastro.");
        };

        // 4- Fazer a verificação da senha passada pelo usuário, com a senha guardada no banco de dados.
        const senhaCifrada= usuarioCadastradoNaTabela[0].password;
        const instanciaDeHash= new Hash();
        const senhaAutenticacao= instanciaDeHash.comparaHash(password, senhaCifrada);

        if(!senhaAutenticacao){
            codeError= 409;
            throw new Error("Email ou senha inválidos, faça seu cadastro.");
        };

        // 5- Pegar id do banco de dados.
        const {id}= usuarioCadastradoNaTabela[0];

        // 6- Criar novo Token.
        const novoToken= new Token();
        const token= novoToken.gerarToken(id);

        // 7- Retornar o token.
        res.status(200).send({"access_token":token})

    }catch(error: any){
        res.status(codeError).send(error.message || error.sqlMessage);
    }
}