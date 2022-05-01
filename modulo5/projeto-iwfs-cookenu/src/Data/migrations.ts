import connection from "../connection";

const error= (error:any) => console.log(error.message || error.sqlMessage);

export const criarTabelas= () => connection.raw(`
    CREATE TABLE IF NOT EXISTS Usuarios_Cookenu (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL UNIQUE
    );

    CREATE TABLE IF NOT EXISTS Receitas (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        creation_date DATE NOT NULL
    );

    CREATE TABLE IF NOT EXISTS Usuarios_Cookenu_Receitas (
        id VARCHAR(255) PRIMARY KEY,
        Usuarios_Cookenu_id VARCHAR(255) NOT NULL,
        Receitas_id VARCHAR(255) NOT NULL,
        FOREIGN KEY(Usuarios_Cookenu_id) REFERENCES Usuarios_Cookenu(id),
        FOREIGN KEY(Receitas_id) REFERENCES Receitas(id)
    );
`)
    .then(() => console.log("Tabela criada com sucesso."))
    .catch(error);

