/* 

-=-=-=-=-=-=-=-=-=-=-=-  Herança -=-=-=-=-=-=--=-=-=-=-=-=-  
Exercício 1

*/

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(id: string, email: string, name: string, password: string){
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name 
        this.password = password
    }

    public get Id(): string {
        return this.id
    }

    public get Email(): string {
        return this.email
    }

    public get Name(): string {
        return this.name
    }

    public introduceYourself(): string{
        return `Olá, sou ${this.name}. Tenha um bom dia!`;
    }
};


/*
const clara= new User("001", "clara@gmail.com.br", "Clara Lustosa", "clarinha");
console.log(clara.Name);
console.log(clara.Id);
console.log(clara.Email);

a - Não, pois é uma propriedade privada, ou seja, a única forma de acessá-la seria por meio de um método get.

b - A mensagem "Chamando o construtor da classe User" é chamada sempre que é instanciado um novo objeto.


=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=--=-=-=-=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=--=-=-=-=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

Exercício 2
*/

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(id: string, email: string, name: string, password: string, creditCard: string) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public get CreditCard(): string {
        return this.creditCard;
    }
};

/*
const cliente1= new Customer("002", "rafa@gmail.com.br", "Rafaela Santos", "rafinha123", "78125-02");
console.log(cliente1.Id)
console.log(cliente1.Email)
console.log(cliente1.Name)
console.log(cliente1.CreditCard)

a- Uma vez.
b- Uma vez. Pois assim que você invoca o constructor de Customer, o super invoca o constructor de User. 

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=--=-=-=-=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=--=-=-=-=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

Exercício 3

const cliente2= new Customer("003", "andre@gmail.com.br", "André Paraguai", "paraguai123", "15483-02");
console.log(cliente2.Id);
console.log(cliente2.Name);
console.log(cliente2.Email);
console.log(`R$ ${cliente2.purchaseTotal}`);
console.log(cliente2.CreditCard);

a - Não seria possível. Pois password é uma propriedade privada. A única forma de conseguir acessar essa informação, seria através de um método get.

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=--=-=-=-=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=--=-=-=-=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

Exercício 4
console.log(cliente2.introduceYourself());

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=--=-=-=-=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=--=-=-=-=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

Exercício 5
console.log(cliente2.introduceYourself());

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=--=-=-=-=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=--=-=-=-=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

-=-=-=-=-=-=--=-=-=-=-=-=- Polimorfismo -=-=-=-=-=-=--=-=-=-=-=-=-
Exercício 1
*/

interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
};

const novoCliente: Client= {
    name: "Claudio Lopez",
    registrationNumber: 1,
    consumedEnergy: 230,
    calculateBill(): number {
        return 10;
    }
};

/*
console.log(novoCliente.name)
console.log(novoCliente.registrationNumber)
console.log(novoCliente.consumedEnergy)
console.log(novoCliente.calculateBill())

a- Consegui imprimir todas.

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=--=-=-=-=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=--=-=-=-=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

Exercício 2
*/

abstract class Place{
    constructor(protected cep: string) {}

    public getCep(): string {
        return this.cep;
    }
};
/* 

a- Ele avisa que não é possível criar uma instância de uma classe abstrata.
b- Por Place ser uma classe abstrata, só podemos criar um novo objeto através das classes filhas, que herdam propriedades e métodos, da classe abstrata.

*/

class newPlace extends Place{
    constructor(cep: string){
        super(cep);
    }
};
const cep= new newPlace("08025-250");
/*
console.log(cep.getCep());

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=--=-=-=-=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=--=-=-=-=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

Exercício 3
*/

class Residence extends Place {
    constructor(protected residentsQuantity: number, cep: string) {
        super(cep);
    };

    get moradores():number{
        return this.residentsQuantity;
    }

    set alterarMoradores(valor){
        this.residentsQuantity= valor;
    }
};

const residencia= new Residence(5, "07895-254");
/*
console.log("Cep:",residencia.getCep());
residencia.alterarMoradores=10;
console.log("Moradores:",residencia.moradores);
*/

class Commerce extends Place {
    constructor(protected floorsQuantity: number, cep: string) {
        super(cep);
    };

    get andares(): number{
        return this.floorsQuantity;
    };

    set mudaAndar(andar){
        this.floorsQuantity = andar;
    }
};

const comercio= new Commerce(12, "15151515-481");
/*
console.log(comercio)
console.log(comercio.andares)
comercio.mudaAndar= 25;
console.log(comercio)
*/

class Industry extends Place {
    constructor(protected machinesQuantity: number, cep: string) {
        super(cep);
    };

    get maquinas(): number{
        return this.machinesQuantity;
    };

    set alterarMaquinas(valor){
        this.machinesQuantity= valor;
    };
};

const industria= new Industry(50, "7848491-451");
/*
console.log(industria.maquinas);
industria.alterarMaquinas= 120;
console.log(industria.maquinas);

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=--=-=-=-=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=--=-=-=-=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

Exercício 4
*/
class ResidentialClient extends Residence implements Client{
    private cpf:string;
    public name: string;
    public registrationNumber: number;
    public consumedEnergy:number;

    constructor(
        residentsQuantity: number, 
        cep: string, 
        cpf:string, 
        name:string, 
        registrationNumber:number, 
        consumedEnergy:number)
        {
        super(residentsQuantity, cep);
        this.cpf= cpf;
        this.name= name;
        this.registrationNumber= registrationNumber;
        this.consumedEnergy= consumedEnergy;
    };

    get mostrarCpf(): string{
        return this.cpf;
    };

    calculateBill(): number{
        return this.consumedEnergy * 0.75;
    };
};

const familaSilva= new ResidentialClient(6, "12694-365", "651277987-12", "Lucas Silva", 15, 236);
/*
console.log(familaSilva)
console.log(familaSilva.mostrarCpf)
console.log(familaSilva.calculateBill())
console.log(familaSilva.name)

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=--=-=-=-=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=--=-=-=-=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

Exercício 5

a- Possuem praticamente as mesmas propriedades e métodos.
b- O consumo de energia, quantidade de andares e cnpj
*/

class CommercialClient extends Commerce implements Client{
    private cnpj:string;
    public name: string;
    public registrationNumber: number;
    public consumedEnergy:number;

    constructor(cnpj:string, 
        floorsQuantity: number, 
        cep: string,
        name: string,
        registrationNumber: number,
        consumedEnergy:number
        ){
        super(floorsQuantity, cep);
        this.cnpj= cnpj;
        this.name= name;
        this.registrationNumber= registrationNumber;
        this.consumedEnergy= consumedEnergy;
    };

    get mostrarCnpj(): string{
        return this.cnpj;
    };

    calculateBill(): number{
        return this.consumedEnergy * 0.53;
    };
};

const pizzaria= new CommercialClient("45151554154-55454", 3, "454541597-451", "Pizza Hut", 50, 1560);
/*
console.log(pizzaria);
console.log(pizzaria.mostrarCnpj);
console.log(pizzaria.calculateBill().toFixed(2));

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=--=-=-=-=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=--=-=-=-=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

Exercício 6

a - Deve ser filha de Industry, pois a classe Industry possui propriedades e métodos, que podem ser usados pela classe IndustrialClient;

b- A interface Client, pois cria um padrão na hora de criar novas instancias.

c- Pois são dados que não sofrem alterações.
*/

class IndustrialClient extends Industry implements Client{
    private registroIndustrial: string; 
    public name: string;
    public registrationNumber: number;
    public consumedEnergy:number;

    constructor(registroIndustrial: string, 
        machinesQuantity: number, 
        cep: string,
        name:string,
        registrationNumber:number,
        consumedEnergy:number
        ){
        super(machinesQuantity, cep);
        this.registroIndustrial= registroIndustrial;
        this.name= name;
        this.registrationNumber= registrationNumber;
        this.consumedEnergy= consumedEnergy;
    };

    get registro():string{
        return this.registroIndustrial;
    };

    calculateBill(): number{
        return (this.consumedEnergy * 0.45) + 100 * this.maquinas;
    };
};

const superIndustria= new IndustrialClient("45154154-55454", 350, "451597-451", "Fiat", 80, 80060);

console.log(superIndustria);
console.log(superIndustria.registro);
console.log(superIndustria.calculateBill().toFixed(2));