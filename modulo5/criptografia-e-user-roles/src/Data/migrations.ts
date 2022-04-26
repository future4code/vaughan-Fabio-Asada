import connection from "../connection";

const error= (error:any) => console.log(error.message || error.sqlMessage);

export const criarTabelas= () => connection.raw(`
    CREATE TABLE IF NOT EXISTS Usuarios (
        id VARCHAR(255) PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL UNIQUE
    )
`)
    .then(() => console.log("Tabela criada com sucesso."))
    .catch(error);

