type Produtos= [
    { nome: string, quantidade: number , valorUnitario: number | string},
    { nome: string, quantidade: number , valorUnitario: number | string},
    { nome: string, quantidade: number , valorUnitario: number | string},
    { nome: string, quantidade: number , valorUnitario: number | string},
    { nome: string, quantidade: number , valorUnitario: number | string},
    { nome: string, quantidade: number , valorUnitario: number | string},
    { nome: string, quantidade: number , valorUnitario: number | string},
]; 

type Mercadoria= { nome: string, quantidade: number , valorUnitario: number };
type Mercadoria2= { nome: string, quantidade: number , valorUnitario: string };

const produtos: Produtos= [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
];

const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado;
};

const produtosNoEstoque= (array: Produtos): string[] => {

    const valorUnitarioString = array.map((obj:Mercadoria): Mercadoria2=> {
        const valorUnitario: string= ajustaPreco(obj.valorUnitario);

        return {...obj, valorUnitario:valorUnitario};
    });
    
    const estoqueOrdenado= valorUnitarioString.sort((a, b) => {
        if (a.quantidade > b.quantidade) {
            return 1;
        }
        if (a.quantidade < b.quantidade) {
            return -1;
        }
        return 0;
    });

    const arrayString: string[] = estoqueOrdenado.map((obj:Mercadoria2): any=> {

        return `{nome:${obj.nome}, quantidade:${obj.quantidade}, valorUnitario:${obj.valorUnitario}}`;
    });
    
    return arrayString;
};

console.log(produtosNoEstoque(produtos))