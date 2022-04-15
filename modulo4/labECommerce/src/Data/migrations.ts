import connection from "../connection";

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
    .raw(`

        CREATE TABLE IF NOT EXISTS labecommerce_users (
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) UNIQUE NOT NULL
        );

        CREATE TABLE IF NOT EXISTS labecommerce_products (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price FLOAT NOT NULL,
            image_url VARCHAR(255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS labecommerce_purchases (
            id VARCHAR(255) PRIMARY KEY,
            user_id VARCHAR(255) NOT NULL,
            product_id VARCHAR(255) NOT NULL,
            quantity INT,
            total_price FLOAT,
            FOREIGN KEY(user_id) REFERENCES labecommerce_users (id),
            FOREIGN KEY(product_id) REFERENCES labecommerce_products (id)
        );
`)
    .then(() => { console.log("Tabela criada") })
    .catch(printError)


export const cadastrarUsuarioNaTabela= async (usuario:any): Promise<void> => {
        try{

            const insertUsers = () => connection.raw(`
                INSERT INTO labecommerce_users (id, nome, email, password) 
                VALUES ("${usuario.id}","${usuario.nome}","${usuario.email}","${usuario.password}");
            `)
                .then(() => { console.log("Usuário cadastrado na tabela.") })
                .catch(printError)

            const closeConnection = () => { connection.destroy() };

            createTables()
                        .then(insertUsers)
                        .finally(closeConnection)

        }catch(error: any){
            console.log(error.message);
        }
};


export const cadastrarProdutoNaTabela= async (produto:any): Promise<void> => {
    try{

        const insertUsers = () => connection.raw(`
            INSERT INTO labecommerce_products (id, name, price, image_url) 
            VALUES ("${produto.id}","${produto.name}","${produto.preco}","${produto.image_url}");
        `)
            .then(() => { console.log("Produto cadastrado na tabela.") })
            .catch(printError)

        const closeConnection = () => { connection.destroy() };

        createTables()
                    .then(insertUsers)
                    .finally(closeConnection)

    }catch(error: any){
        console.log(error.message);
    }
};


export const registroDeComprasNaTabela= async (compras:any): Promise<void> => {
    try{

        const insertUsers = () => connection.raw(`
            INSERT INTO labecommerce_purchases (id, user_id, product_id, quantity, total_price) 
            VALUES ("${compras.id}","${compras.user_id}","${compras.product_id}","${compras.quantity}", "${compras.total_price}");
        `)
            .then(() => { console.log("Registro de compras.") })
            .catch(printError)

        const closeConnection = () => { connection.destroy() };

        createTables()
                    .then(insertUsers)
                    .finally(closeConnection)

    }catch(error: any){
        console.log(error.message);
    }
};
