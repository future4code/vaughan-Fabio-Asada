import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import axios from "axios";
import {baseUrl} from "./baseUrl";

const app: Express = express();

app.use(express.json());
app.use(cors());

// a - É uma função assíncrona, do tipo void. Pois ela não retorna nada.

const createNews= async ():Promise<void> => {
    try{
        const body={
            "title": "Hamilton saiu do Frontend",
            "content": "Para a alegria de muitos, e a tristeza de alguns, a turma Hamilton está, agora, no backend!",
            "date": 1589818936000
        }
        await axios.put(`${baseUrl}/news`, body);

    }catch(error: any){
        console.log(error.message);
    }
};

const main= async (): Promise<void> => {
    createNews();
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