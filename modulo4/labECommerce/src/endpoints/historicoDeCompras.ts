import { Request, Response } from "express";
import connection from "../connection";

export const historicoDeCompras= async (req: Request, res: Response): Promise<void> => {
    let codeError= 400;
    
    try{
        const user_Id= req.params.user_id; 

        connection.raw(`
            SELECT * FROM labecommerce_purchases JOIN labecommerce_users ON user_id = labecommerce_users.id JOIN labecommerce_products ON product_id = labecommerce_products.id WHERE user_id = ${user_Id};
        `)
            .then(data => {
                const resultado= data[0].map((obj: any) => {
                    return {
                        nome:obj.nome,
                        produto:obj.name,
                        preco_do_produto:obj.price,
                        quantidade:obj.quantity,
                        total:obj.total_price
                    }
                });
                
                if(!resultado.length){
                    codeError= 422;
                    throw new Error("Não foi possível encontrar seu histórico de compras.");

                }else if(resultado){
                    res.status(200).send(resultado);

                }else{
                    codeError= 500;
                    throw new Error("Rapaz, não faço a menor idéia do que aconteceu.");
                };
            })
            .catch((error: any) => { console.log(error.sqlMessage || error.message) });

    }catch(error: any){
        res.status(codeError).send(error.sqlMessage || error.message);
    };
};