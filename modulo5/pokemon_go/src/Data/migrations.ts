import connection from "../connection";

const error= (error:any) => console.log(error.message || error.sqlMessage);

export const createTable= () => connection.raw(`
    CREATE TABLE IF NOT EXISTS Pokemons (
        id VARCHAR(255) PRIMARY KEY,
        table_row INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        type_1 VARCHAR(255),
        type_2 VARCHAR(255),
        stat_total INT,
        atk INT,
        def INT,
        sta INT
    );
`)
    .then(() => console.log("Tabela criada com sucesso."))
    .catch(error);