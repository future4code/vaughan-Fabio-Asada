import connection from "../connection";

const error= (error:any) => console.log(error.message || error.sqlMessage);

export const createTable= () => connection.raw(`
    CREATE TABLE IF NOT EXISTS Usuarios (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        surname VARCHAR(255) NOT NULL,
        cpf BIGINT UNIQUE,
        email VARCHAR(255) UNIQUE,
        phone INT NOT NULL UNIQUE
    );
`)
    .then(() => console.log("Tabela criada com sucesso."))
    .catch(error);