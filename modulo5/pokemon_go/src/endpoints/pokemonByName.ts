import { Request, Response } from "express";
import connection from "../connection";

export const pokemonByName=async (req: Request, res: Response): Promise<void> => { 
    let codeError: number = 400;

    try{
        const nome= req.body.name.toLowerCase();
        
        if(!nome){
            codeError= 422;
            res.status(codeError).send("Campo vazio. Preencha corretamente o campo 'name'");
            return;
        };

        if(nome.length < 3){
            codeError= 422;
            res.status(codeError).send("Name deve possuir no mínimo 3 caracteres.");
            return;
        };

        const settingName= nome[0].toUpperCase() + nome.slice(1);
        
        const checkPokemonInTable: any= await connection("Pokemons")
                .where("name","like",`%${settingName}%`)
                .then(data => data)
                .catch((error:any) => {
                    console.log(error.message || error.sqlMessage);
                })

        if(!checkPokemonInTable.length){
            codeError= 422;
            throw new Error("Pokemon não encontrado.");
        }

        res.status(200).send(checkPokemonInTable);
        
    }catch(error: any){
        res.status(codeError).send(error.message || error.sqlMessage);
    }
}