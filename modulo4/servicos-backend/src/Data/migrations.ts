import connection from "../connection";
import { pegarEndereco } from "../services/pegarEndereco";

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
    .raw(`

        CREATE TABLE IF NOT EXISTS endereco_informacao (
            id VARCHAR(255) PRIMARY KEY,
            cep VARCHAR(255) UNIQUE NOT NULL,
            logradouro VARCHAR(255) NOT NULL,
            numero VARCHAR(255) NOT NULL,
            complemento VARCHAR(255),
            bairro VARCHAR(255),
            cidade VARCHAR(255),
            estado VARCHAR(255)
        );
`)
    .then(() => { console.log("Tabela criada") })
    .catch(printError)


export const informacoes= async (ceps: any, numero:string, complemento:string): Promise<void> => {
        try{
            const {cep, logradouro, bairro, localidade, uf} = await pegarEndereco(ceps);

            const insertUsers = () => connection.raw(`
                INSERT INTO endereco_informacao (id, cep, logradouro, numero, complemento, bairro, cidade, estado) 
                VALUES ("${Date.now()}","${cep}","${logradouro}","${numero}", "${complemento}", "${bairro}", "${localidade}", "${uf}");
            `)
                .then(() => { console.log("Endereço inserido na tabela.") })
                .catch(printError)

            const closeConnection = () => { connection.destroy() };

            createTables()
                        .then(insertUsers)
                        .finally(closeConnection)

        }catch(error: any){
            console.log(error.message);
        }
};
