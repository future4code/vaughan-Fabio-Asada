//Exercício 1

/*

a- O construtor, serve para a gente criar novos objetos de determinada classe. Para chamá-lo, basta instanciar uma nova conta do usuário. Exemplo: const fabio= new UserAccount(00011515-54, "Fábio", 18). 

b- "Chamando o construtor da classe UserAccount", será impresso toda vez que for criado um novo objeto.

*/ 

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(cpf: string, name: string, age: number, transactions:Transaction[]) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        this.transactions=transactions;
    };

    public get nome(){
        return {name:this.name};
    };

    public set alterarNome(nome: string){
        this.name=nome;
    };

    public get idade(){
        return {age:this.age};
    };

    public get identidade(){
        return {cpf:this.cpf};
    };

    public get balanco(){
        return {balance:this.balance};
    };

    public get transacoes(){
        return {transactions:this.transactions};
    }
};

/*
const fabio= new UserAccount("00011515-54", "Fábio", 18);
console.log(fabio.nome);
console.log(fabio.idade);
console.log(fabio.identidade);
console.log(fabio.balanco);
console.log(fabio.transacoes);

c) Através de métodos getter e setter.
*/

//Exercício 2
class Transaction{
    private description: string;
    private value: number;
    private date: string;


    constructor(description: string, value: number, date:string){
        this.description= description;
        this.value= value;
        this.date= date;
    };

    public get descricao(){
        return {description:this.description};
    };

    public get valor(){
        return {value:this.value};
    };

    public get data(){
        return {date:this.date};
    }
};

/*
const transacoesDeFelipe= new Transaction("Fazer compras no supermecado", 1200, "2022-03-25");
console.log(transacoesDeFelipe.descricao);
console.log(transacoesDeFelipe.valor);
console.log(transacoesDeFelipe.data);

const felipe= new UserAccount("22211515-54", "Felipe", 48, [transacoesDeFelipe]);
console.log(felipe);
*/

//Exercício 3
class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    };
  
    public get transacoes(){
        return this.accounts[0].transacoes.transactions[0];
    };

    public set completarNome(nome:string){
        this.accounts[0].alterarNome = nome;
    };
};
const transacoesDeFelipe= new Transaction("Fazer compras no supermecado", 1200, "2022-03-25");
const felipe= new UserAccount("22211515-54", "Felipe", 48, [transacoesDeFelipe]);
const armazenarDadosFelipe= new Bank([felipe]);

// console.log(armazenarDadosFelipe.transacoes);
// console.log(armazenarDadosFelipe);
armazenarDadosFelipe.completarNome= "Felipe Campos Machado de Assis";
console.log(armazenarDadosFelipe);