import { Request, Response } from "express";
import { Token } from "../services/Token";
import connection from "../connection";

export const pegarReceitas= async (req: Request, res: Response): Promise<void> => {
    let codeError: number= 400; 

    try{
        const {authorization}= req.headers;
        const {id}= req.params;

        // 1- Verificar se authorization, id estão vazios.
        if(!authorization || !id ){
            codeError= 422;
            throw new Error("Prencha os campos 'authorization', 'id' corretamente.");
        };  

        // 2- Fazer a verificação do token.
        const token= new Token();
        token.verificarToken(authorization as string);

        // 3- Pegar as informações do banco de dados, através do id.
        const dadosDaTabela= await connection.raw(`
            SELECT Receitas_id, title, description, creation_date FROM Usuarios_Cookenu_Receitas JOIN Usuarios_Cookenu ON Usuarios_Cookenu_id = Usuarios_Cookenu.id JOIN Receitas ON Receitas_id = Receitas.id WHERE Receitas_id = "${id}"; 
        `)
            .then(data => data[0][0])
            .catch((error:any) => {
                console.log(error.message || error.sqlMessage);
            });

        // 4- Criando a data que nós conhecemos.
        const novadata= new Date(dadosDaTabela.creation_date);
        const ano= novadata.getFullYear();
        const mes= novadata.getMonth() + 1;
        const dia= novadata.getDate();
        
        // 5- Formatação da data.
        const formataData= (dado: number): string => {
            return dado < 10? `0${dado}`: `${dado}`;
        };
        
        const data= `${formataData(dia)}/${formataData(mes)}/${ano}`;

        
        // 6- Retorna um objeto com id, title, description e creation_date.
        res.status(200).send({
            id:dadosDaTabela.Receitas_id, 
            title:dadosDaTabela.title, 
            description:dadosDaTabela.description, 
            creation_date:data
        });

    }catch(error:any){
        res.status(codeError).send(error.message || error.sqlMessage);
    }
}