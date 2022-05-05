import { Request, Response } from "express";
import {Token} from "../services/Token";
import {GerarIds} from "../services/GerarIds";
import connection from "../connection";

export const criarReceitas= async (req: Request, res: Response): Promise<void> => {
    let codeError: number= 400;

    try{
        const {authorization}= req.headers;
        const {title, description}= req.body;

        // 1- Verificar se authorization, title, description, estão vazios.
        if(!authorization || !title || !description){
            codeError= 422;
            throw new Error("Prencha os campos 'authorization', 'title', 'description' corretamente.");
        };  

        // 2- Fazer a verificação do token.
        const token= new Token();
        const idToken = token.verificarToken(authorization as string);

        // 3- Criar um novo id, para a tabela Receitas.
        const gerarId= new GerarIds();
        const id= gerarId.id();

        // 4- Gerar uma data, para a tabela Receitas.
        const gerarData= new Date();
        const dia= gerarData.getDate();
        const mes= gerarData.getMonth() + 1;
        const ano= gerarData.getFullYear();
        const data=`${ano}-${mes}-${dia}`;

        // 5- Guardar a receita na tabela Receitas.
        connection("Receitas")
            .insert([{"id":`${id}`, "title":`${title}`, "description":`${description}`, "creation_date":`${data}`}])
            .then(() => console.log("Receita inserida na tabela com sucesso."))
            .catch((error: any) => {
                codeError=422
                res.status(codeError).send(error.sqlMessage || error.message)
            });

        // 6- Criar o id da tabela Usuarios_Cookenu_Receitas.
        const gerarNovoId= new GerarIds();
        const identificacao= gerarNovoId.id();

        // 7- Inserir os dados na tabela Usuarios_Cookenu_Receitas. Para poder fazer o link entre as tabelas Usuarios_Cookenu e Receitas. 
        connection("Usuarios_Cookenu_Receitas")
            .insert([{"id":`${identificacao}`, "Usuarios_Cookenu_id":`${idToken.id}`, "Receitas_id":`${id}`}])
            .then(() => console.log("Link com as tabelas feito com sucesso."))
            .catch((error: any) => {
                codeError=422
                res.status(codeError).send(error.sqlMessage || error.message)
            });


        // 8- Retornar mensagem para o usuário, avisando que a receita foi criada com sucesso.
        res.status(200).send(`Receita criada com sucesso.`);

    }catch(error:any){
        res.status(codeError).send(error.message || error.sqlMessage);
    }
}