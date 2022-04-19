import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import axios from "axios";
import {baseUrl} from "./baseUrl";

const app: Express = express();

app.use(express.json());
app.use(cors());

// a - Sim, por que no type está com ponto e vírgula.
// b - Para podermos ver o que a promise nos retornou.

type user = {
	id: string,
	name: string,
	email: string,
};

const subscribers= async ():Promise<user[]> => {
    try{
        const resultado= await axios.get(`${baseUrl}/subscribers`);
        return resultado.data.map((obj: any) => {
            return {
                id:obj.id,
                name:obj.name,
                email:obj.email,
            };
        })
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