import { Request, Response } from "express";
import connection from "../connection";

export const usuarioCadastrados= async (req: Request, res: Response): Promise<void> => {
    let codeError= 400;
    
    try{
        connection.raw(`
            SELECT * FROM labecommerce_users;
        `)
            .then(data => {
                const resultado= data[0].map((obj:any) => {
                    return {
                        id:obj.id,
                        name:obj.nome,
                        email:obj.email,
                        password:obj.password
                    }
                });
            
                if(!resultado.length){
                    codeError= 422;
                    throw new Error("Não há usuários cadastrados.");

                }else if(resultado){
                
                    connection.raw(`
                    SELECT nome, name FROM labecommerce_purchases JOIN labecommerce_users ON user_id = labecommerce_users.id JOIN labecommerce_products ON product_id = labecommerce_products.id;
                    `)
                        .then(data => {
                            const produtos= data[0].map((obj: any) => {
                                return {nome: obj.nome, produto: obj.name};
                            });
                            
                            for(let i=0; i < resultado.length; i++){
                                if(resultado[i].name === produtos[i].nome){
                                    
                                    resultado[i].purchases=[`${produtos[i].produto}`];
                                }
                            }

                            res.status(200).send(resultado);
                        })
                        .catch((error: any) => res.status(codeError).send(error.sqlMessage || error.message))

                }else{
                    codeError= 500;
                    throw new Error("Rapaz, não faço a menor idéia do que aconteceu.");
                };
            })
            .catch((error: any) => res.status(codeError).send(error.sqlMessage || error.message));

    }catch(error: any){
        res.status(codeError).send(error.sqlMessage || error.message);
    };
};