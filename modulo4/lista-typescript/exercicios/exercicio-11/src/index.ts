const obj: any={
    "1000": "M",
    "900": "CM",
    "800": "DCCC",
    "700": "DCC",
    "600": "DC",
    "500": "D",
    "400": "CD",
    "300": "CCC",
    "200": "CC",
    "100": "C",
    "90": "XC",
    "80": "LXXX",
    "70": "LXX",
    "60": "LX",
    "50": "L",
    "40": "XL",
    "30": "XXX",
    "20": "XX",
    "10": "C",
    "9": "IX",
    "8": "VIII",
    "7": "VII",
    "6": "VI",
    "5": "V",
    "4": "IV",
    "3": "III",
    "2": "II",
    "1": "I",
}

const romanos= (valor:number): string => {
    const numeroDeCaracteres: string= String(valor);

    let unidade: number= 0;
    let dezena: number= 0;
    let centena: number= 0;
    let milhar: number= 0;

    if(numeroDeCaracteres.length === 4){
        centena= valor - 1000;
        dezena= +numeroDeCaracteres.slice(2, 4);
        unidade= +numeroDeCaracteres.slice(3, 4);
        
        return `${obj["1000"]}${obj[`${centena - dezena}`]}${obj[`${dezena - unidade}`]}${unidade === 0 ? "" : obj[`${unidade}`]}`;

    }else if(numeroDeCaracteres.length === 3){
        centena= valor;
        dezena= +numeroDeCaracteres.slice(1, 3);
        unidade= +numeroDeCaracteres.slice(2, 3);

        return `${obj[`${centena - dezena}`]}${obj[`${dezena - unidade}`]}${obj[`${unidade}`]}`;

    }else if(numeroDeCaracteres.length === 2){
        dezena= +numeroDeCaracteres;
        unidade= +numeroDeCaracteres.slice(1, 2);

        return `${obj[`${dezena - unidade}`]}${obj[`${unidade}`]}`;
    }else{
        unidade= +numeroDeCaracteres;

        return `${obj[`${unidade}`]}`;
    };
};

console.log(romanos(453));
