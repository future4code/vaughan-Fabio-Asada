import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import {cadastrarUsuario} from "./endpoints/cadastrarUsuario";
import {usuarioCadastrados} from "./endpoints/usuarioCadastrados";
import {cadastrarProdutos} from "./endpoints/cadastrarProdutos";
import {produtosCadastrados} from "./endpoints/produtosCadastrados";
import {registroDeCompras} from "./endpoints/registroDeCompras";
import {historicoDeCompras} from "./endpoints/historicoDeCompras";

const app: Express = express();

app.use(express.json());
app.use(cors());

//Cadastro de usuário
app.post("/users", cadastrarUsuario);

//Busca por todos os usuários
app.get("/users", usuarioCadastrados);

//Cadastro de produto
app.post("/products", cadastrarProdutos);

//Busca por todos os produtos
app.get("/products", produtosCadastrados);

//Registro de compra
app.post("/purchases", registroDeCompras);

//Busca das compras de um usuário
app.get("/users/:user_id/purchases", historicoDeCompras);


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});


