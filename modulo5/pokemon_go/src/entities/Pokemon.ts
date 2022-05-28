export class Pokemon{
    private id: string;
    private table_row: number;
    private name: string;
    private type_1?: string;
    private type_2?: string;
    private stat_total?: number;
    private atk?: number;
    private def?: number;
    private sta?: number;

    constructor(
        id: string,
        table_row: number,
        name: string,
        type_1?: string,
        type_2?: string,
        stat_total?: number,
        atk?: number,
        def?: number,
        sta?: number
        ){

        this.id= id;
        this.table_row=table_row;
        this.name= name;
        this.type_1 =type_1;
        this.type_2 = type_2;
        this.stat_total=stat_total;
        this.atk= atk;
        this.def= def;
        this.sta= sta;
    };

    public get idPokemon(){
        return this.id;
    };

    public get table_rowPokemon(){
        return this.table_row;
    };

    public get namePokemon(){
        return this.name;
    };

    public get type_1Pokemon(){
        return this.type_1;
    };

    public get type_2Pokemon(){
        return this.type_2;
    };

    public get stat_totalPokemon(){
        return this.stat_total;
    };

    public get atkPokemon(){
        return this.atk;
    };

    public get defPokemon(){
        return this.def;
    };

    public get staPokemon(){
        return this.sta;
    };
}

            