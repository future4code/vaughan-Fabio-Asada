import { Request, Response } from "express";
import { pegarEndereco } from "../services/pegarEndereco";
import { informacoes } from "../Data/migrations";

export const criarEnderecos= async (req: Request, res: Response) => {
    let codeError= 500;

    try{
        const cep= req.body.cep;
        const numero= req.body.numero;
        const complemento= req.body.complemento;

        if(!cep){
            codeError= 422;
            throw new Error("Preencha o campo de CEP");
        };
        const {logradouro, bairro, localidade, uf}= await pegarEndereco(cep);
        
        informacoes(cep, numero, complemento);

        res.status(200).send({rua:logradouro, numero:numero, complemento:complemento, bairro:bairro, cidade:localidade, estado:uf})
    }catch(error: any){
        res.status(codeError).send(error.message)
    }
}