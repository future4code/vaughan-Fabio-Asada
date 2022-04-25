### Exercício 1

a) Talvez porque com strings, seja possível gerar uma maior sequência de combinações, sem que elas se repitam.

### Exercício 2

a) Está inserindo id, email, password, na tabela userTableName.

b)
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

### Exercício 3

a) Tá reforçando para o typescript que JWT_KEY é uma string.

### Exercício 7

a) Que o valor que jwt.verify retorna pode contornar as limitações do sistema de tipos.