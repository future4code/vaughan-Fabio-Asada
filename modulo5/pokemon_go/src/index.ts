import express from "express";
import { AddressInfo } from "net";
import {allPokemons} from "./endpoints/allPokemons";
import {pokemonByName} from "./endpoints/pokemonByName";

const app = express();
app.use(express.json());

// Pegar todos os pokemons
app.get("/", allPokemons);


// Pegar pokemon pelo nome
app.get("/name", pokemonByName);


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;