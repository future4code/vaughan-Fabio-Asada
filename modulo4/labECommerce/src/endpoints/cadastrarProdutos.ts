import { Request, Response } from "express";
import {cadastrarProdutoNaTabela} from "../Data/migrations";

export const cadastrarProdutos= async (req: Request, res: Response): Promise<void> => {
    let codeError= 400;
    try{
        const {name, price, image_url}= req.body;
        const id= String(Date.now());

        if(!name || !price || !image_url){
            codeError= 422;
            throw new Error(`${name? "Nome preenchido corretamente.\n": "Preencha corretamente o campo nome.\n"} ${price? "Preço preenchido corretamente.\n": "Preencha corretamente o campo preço.\n"} ${image_url ? "Image_url preenchido corretamente.\n": "Preencha corretamente o campo image_url.\n"}`);

        }else if(name && price && image_url){
            const preco= Number(price);
            cadastrarProdutoNaTabela({id, name, preco, image_url});
            res.status(200).send({message:"Produto cadastrado."});
        
        }else{
            codeError= 500;
            throw new Error("Rapaz, não faço a menor idéia do que aconteceu.");
        }

    }catch(error: any){
        res.status(codeError).send(error.sqlMessage || error.message);
    };
};