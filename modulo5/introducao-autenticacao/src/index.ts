import express from "express";
import { AddressInfo } from "net";
import { criarUsuario } from "./endpoints/criarUsuario";
import { pegarUsuario } from "./endpoints/pegarUsuario";
import { retornaDados } from "./endpoints/retornaDados";

const app = express();
app.use(express.json());

//Criar Usuário
app.post("/user/signup", criarUsuario);

//Pegar email do usuário e retornar um token
app.post("/user/login", pegarUsuario);

//Retorna as informações do usuário logado
app.get("/user/profile", retornaDados);


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;