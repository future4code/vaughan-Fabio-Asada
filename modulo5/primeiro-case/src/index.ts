import express from "express";
import { AddressInfo } from "net";
import {createUsers} from "./endpoints/createUsers";
import {getAllUsers} from "./endpoints/getAllUsers";
import {editUser} from "./endpoints/editUser";
import {deleteUser} from "./endpoints/deleteUser";
import {validations} from "./services/validations";
import {addAnotherPhone} from "./endpoints/addAnotherPhone";
import {validatePhone} from "./services/validatePhone";
import {addAnotherEmail} from "./endpoints/addAnotherEmail";
import {getUser} from "./endpoints/getUser";

const app = express();
app.use(express.json());

//Criar usuário em contatos
app.post("/createUsers", validations(), createUsers);

//Pegar todos os usuários
app.get("/", getAllUsers);

// Editar dados dos usuários;
app.put("/editUser/:id", validations(), editUser);

// Deletar usuário;
app.delete("/deleteUser/:id", deleteUser);

// Adicionar mais um telefone
app.post("/addAnotherPhone/:id", validatePhone(), addAnotherPhone);

// Adicionar mais um email
app.post("/addAnotherEmail/:id", addAnotherEmail);

//Pegar usuário
app.get("/user/:id", getUser);

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;