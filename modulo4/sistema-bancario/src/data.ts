export type Extrato= {valor:number, data:string, descricao:string};

export type Usuario= {
    nome:string,
    cpf:string,
    nascimento:string,
    saldo:number,
    extrato: Extrato[],
};

export const usuario: Usuario[]= [
    {
        nome:"Alex Silva",
        cpf:"984.515.151-55",
        nascimento:"23/05/1984",
        saldo:1000,
        extrato:[
            {valor:120, data:"15/02/2022", descricao:"Churrascaria Boi Chifrudo"}
        ],
    },
    {
        nome:"Fernanda Maria Silva",
        cpf:"254.885.951-23",
        nascimento:"03/10/2002",
        saldo:5000,
        extrato:[
            {valor:500, data:"18/09/2021", descricao:"Presente de aniversário do marido"}
        ],
    },
    {
        nome:"Paloma Marcondes",
        cpf:"884.245.630-78",
        nascimento:"23/12/1998",
        saldo:2500,
        extrato:[
            {valor:6000, data:"01/01/2022", descricao:"Viagem para Fernando de Noronha"}
        ],
    },
    {
        nome:"André Silva Ribeiro",
        cpf:"014.205.010-11",
        nascimento:"17/06/1994",
        saldo:30000,
        extrato:[
            {valor:6000, data:"24/12/2021", descricao:"Celular Samsung S22"}
        ],
    },
    {
        nome:"Juliana Costa Duarte",
        cpf:"360.127.080-44",
        nascimento:"28/02/1990",
        saldo:500000,
        extrato:[
            {valor:40000, data:"05/01/2022", descricao:"Viagem a Disney"}
        ],
    },
];