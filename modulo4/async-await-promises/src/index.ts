import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import axios from "axios";
import {baseUrl} from "./baseUrl";

const app: Express = express();

app.use(express.json());
app.use(cors());

// a - https://labenews.herokuapp.com/subscribers
// b - Promise<any[]>

// c 
async function getSubscribers(): Promise<any[]> {
    try{
        const resultado= await axios.get(`${baseUrl}/subscribers`);
        return resultado.data;

    }catch(error: any){
        console.log(error.message);
    }
};

const main= async (): Promise<void> => {
    console.log(await getSubscribers());
};

// main();


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});