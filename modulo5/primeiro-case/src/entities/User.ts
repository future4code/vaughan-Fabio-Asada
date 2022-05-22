export class User{
    private id: string;
    private name: string;
    private surname: string;
    private cpf?: number;
    private email?: string;
    private phone: number;

    constructor(id: string, name: string, surname:string, phone:number, cpf?:number, email?:string){
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.phone=phone;
        this.cpf=cpf;
        this.email=email;
    };

    public get idUser(): string{
        return this.id;
    };

    public get nameUser(): string{
        return this.name;
    };

    public get surnameUser(): string{
        return this.surname;
    };

    public get phoneUser(): number{
        return this.phone;
    };

    public get cpfUser(): number{
        return this.cpf as number;
    };

    public get emailUser(): string{
        return this.email as string;
    };
}