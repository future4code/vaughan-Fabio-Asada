export enum Tipos {
    ADMIN= "ADMIN",
    NORMAL= "NORMAL",
}

export type Users= {
    id: number,
    name: string,
    email: string,
    type: Tipos,
    age: number,
}

export const users: Users[]= [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: Tipos.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: Tipos.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: Tipos.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: Tipos.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: Tipos.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: Tipos.ADMIN,
        age: 60
    }
]