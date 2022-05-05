import express from "express";
import { AddressInfo } from "net";
import {fazerCadastro} from "./endpoints/fazerCadastro";
import {login} from "./endpoints/login";
import {perfilProprio} from "./endpoints/perfilProprio";
import {perfilDeOutros} from "./endpoints/perfilDeOutros";
import {criarReceitas} from "./endpoints/criarReceitas";
import {pegarReceitas} from "./endpoints/pegarReceitas";

const app = express();
app.use(express.json());

// Fazer Cadastro de Usuário
app.post("/signup", fazerCadastro); 

// Fazer o Login
app.post("/login", login);

// Pegar próprio perfil
app.get("/user/profile", perfilProprio);

// Pegar perfil de outro usuário
app.get("/user/:id", perfilDeOutros);

// Criar receita 
app.post("/recipe", criarReceitas);

// Pegar receitas
app.get("/recipe/:id", pegarReceitas);


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;