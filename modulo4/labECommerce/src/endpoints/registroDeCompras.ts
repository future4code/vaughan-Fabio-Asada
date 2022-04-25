import { Request, Response } from "express";
import connection from "../connection";
import {registroDeComprasNaTabela} from "../Data/migrations";

export const registroDeCompras= async (req: Request, res: Response): Promise<void> => {
    let codeError= 400;
    try{
        const {user_id, product_id, quantity}= req.body;
        const id= String(Date.now());

        if(!user_id || !product_id || !quantity){
            codeError= 422;
            throw new Error(`${user_id? "User_id preenchido corretamente.\n": "Preencha corretamente o campo user_id.\n"} ${product_id? "Product_id preenchido corretamente.\n": "Preencha corretamente o campo product_id.\n"} ${quantity ? "Quantity preenchido corretamente.\n": "Preencha corretamente o campo quantity.\n"}`);

        }else if(user_id && product_id && quantity){
            const quantidade= Number(quantity);


            connection.raw(`
            SELECT price FROM labecommerce_products WHERE id = ${product_id};
        `)
            .then(data => {
                const total_price= data[0][0].price * quantidade;

                registroDeComprasNaTabela({id, user_id, product_id, quantity, total_price});
            })
            .catch((error: any) => { console.log(error.sqlMessage || error.message) });

            res.status(200).send({message:"Compras realizadas com sucesso."});
        
        }else{
            codeError= 500;
            throw new Error("Rapaz, não faço a menor idéia do que aconteceu.");
        }

    }catch(error: any){
        res.status(codeError).send(error.sqlMessage || error.message);
    };
};