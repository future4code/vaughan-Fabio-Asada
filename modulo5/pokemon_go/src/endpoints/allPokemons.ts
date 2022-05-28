import { Request, Response } from "express";
import {createTable} from "../Data/migrations";
import {Pokemon} from "../entities/Pokemon";
import {CreateIds} from "../services/createId";
import connection from "../connection";
const pokemon= require("../../pokemonGo");

export const allPokemons= async (req: Request, res: Response): Promise<void> => {
    let codeError: number = 400;

    try{
        await createTable();
        
        const arrayPokemons= pokemon.map((obj: any) => {
            const newIds= new CreateIds();
            const newPokemon= new Pokemon(newIds.id(), +obj.Row, obj.Name, obj['Type 1'], obj['Type 2'], +obj['STAT TOTAL'], +obj.ATK, +obj.DEF, +obj.STA)
            
            return {...newPokemon};
        });
        
        arrayPokemons.forEach(async (obj:any) => {
            
            const checkPokemonInTable= await connection("Pokemons")
                .where("name","like",`${obj.name}`)
                .then(data => data)
                .catch(error => error);

            if(checkPokemonInTable.length){
                codeError= 409;
                throw new Error("Pokemon já cadastrado na tabela.");
            };

            await connection("Pokemons")
                    .insert([obj])
                    .then()
                    .catch((error:any) => {
                        console.log(error.message || error.sqlMessage);
                    })
        });

        const showPokemons: any = await connection("Pokemons")
                    .select("*")
                    .then(data => data)
                    .catch((error:any) => {
                        console.log(error.message || error.sqlMessage);
                    });

        showPokemons.sort((a: any, b: any) => {
            if (a.table_row > b.table_row) {
                return 1;
            }
            if (a.table_row < b.table_row) {
                return -1;
            }
            return 0;
        });

        res.status(200).send(showPokemons);
        
    }catch(error: any){
        res.status(codeError).send(error.message || error.sqlMessage);
    }
}