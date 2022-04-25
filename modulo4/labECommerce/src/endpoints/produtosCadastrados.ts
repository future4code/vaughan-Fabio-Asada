import { Request, Response } from "express";
import connection from "../connection";

export const produtosCadastrados= async (req: Request, res: Response): Promise<void> => {
    let codeError= 400;
    
    try{
        const ordem: string = req.query.order as string; 
        const search: string = req.query.search as string; 

        if(search && !ordem){
            connection.raw(`
            SELECT * FROM labecommerce_products WHERE name LIKE "%${search.toLowerCase()}%";
        `)
            .then(data => {
                const resultado= data[0].map((obj:any) => {
                    return {
                        id:obj.id,
                        name:obj.name,
                        price:obj.price,
                        imageUrl:obj.image_url
                    }
                });

               
                if(!resultado.length){
                    codeError= 422;
                    throw new Error("Não há produtos cadastrados.");

                }else if(resultado){
                    res.status(200).send(resultado);

                }else{
                    codeError= 500;
                    throw new Error("Rapaz, não faço a menor idéia do que aconteceu.");
                };
            })
            .catch((error: any) => {res.status(codeError).send(error.sqlMessage || error.message)});

        }else if(!ordem && !search){
            connection.raw(`
            SELECT * FROM labecommerce_products;
        `)
            .then(data => {
                const resultado= data[0].map((obj:any) => {
                    return {
                        id:obj.id,
                        name:obj.name,
                        price:obj.price,
                        imageUrl:obj.image_url
                    }
                });

                if(!resultado.length){
                    codeError= 422;
                    throw new Error("Não há produtos cadastrados.");

                }else if(resultado){
                    res.status(200).send(resultado);

                }else{
                    codeError= 500;
                    throw new Error("Rapaz, não faço a menor idéia do que aconteceu.");
                };
            })
            .catch((error: any) => {res.status(codeError).send(error.sqlMessage || error.message);});

        }else if(ordem.toUpperCase() === "DESC" || ordem.toUpperCase() === "ASC"){
        
            connection.raw(`
            SELECT * FROM labecommerce_products ORDER BY name ${ordem.toUpperCase()};
        `)
            .then(data => {
                const resultado= data[0].map((obj:any) => {
                    return {
                        id:obj.id,
                        name:obj.name,
                        price:obj.price,
                        imageUrl:obj.image_url
                    }
                });

                if(!resultado.length){
                    codeError= 422;
                    throw new Error("Não há produtos cadastrados.");

                }else if(resultado){
                    res.status(200).send(resultado);

                }else{
                    codeError= 500;
                    throw new Error("Rapaz, não faço a menor idéia do que aconteceu.");
                };
            })
            .catch((error: any) => {res.status(codeError).send(error.sqlMessage || error.message)});

        }else{
            codeError= 422;
            throw new Error("Valor preenchido no campo order é inválido. Preencha com 'ASC' ou 'DESC'.");
        }

    }catch(error: any){
        res.status(codeError).send(error.sqlMessage || error.message);
    };
};