import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import axios from "axios";
import {baseUrl} from "./baseUrl";

const app: Express = express();

app.use(express.json());
app.use(cors());

// a - Não tem muita diferença. A arrow function é mais simples.

const subscribers= async (): Promise<any[]> => {
    try{
        const resultado= await axios.get(`${baseUrl}/subscribers`);
        return resultado.data;

    }catch(error: any){
        console.log(error.message);
    }
};

const main= async (): Promise<void> => {
    console.log(await subscribers())
}

main();

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});