const primeiro: number = +process.argv[2];
const segundo: number = +process.argv[3];

const operacao= (number1:number, number2:number):string => {
    let maior: number
    let menor: number 
    
    if(number1 > number2){
        maior= number1
        menor= number2
    }else{
        maior= number2
        menor= number1
    }

    const soma: number = number1 + number2;
    const sub: number = maior - menor;
    const mult: number = number1 * number2;

    return `A soma desses números: ${soma}\nA subtração desses números: ${sub}\nA multiplicação desses números: ${mult}\nQual deles é o maior: ${maior === menor? "Os dois números são iguais": maior}`;
};

console.log(operacao(primeiro, segundo));