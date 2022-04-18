import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import axios from "axios";
import {baseUrl} from "./baseUrl";

const app: Express = express();

app.use(express.json());
app.use(cors());

type user = {
	id: string,
	name: string,
	email: string,
};

const subscribers= async (): Promise<any> => {
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

const mandarNotificacao= async (usuarios: user[], frase: string): Promise<any> => {
    try{
        
        for(let i= 0; i < usuarios.length; i++){
            await axios.post(`${baseUrl}/notifications`, {
                "subscriberId": usuarios[i].id,
                "message": frase
            })
        }
        
        console.log("Notificação inserida com sucesso.");
    }catch(error: any){
        console.log("Falha ao inserir notificação.")
    }
}

const main= async (): Promise<void> => {
    try{
        const arrayUsuarios= await subscribers();
        mandarNotificacao(arrayUsuarios, "Seja bem vindoooooo!");

    }catch(error: any){
        console.log(error.message);
    }
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