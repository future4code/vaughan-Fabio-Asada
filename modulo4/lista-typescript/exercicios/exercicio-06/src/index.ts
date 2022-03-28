type Clientes= [
    { cliente:string, saldoTotal: number, debitos: number[] },
	{ cliente:string, saldoTotal: number, debitos: number[] },
	{ cliente:string, saldoTotal: number, debitos: number[] },
	{ cliente:string, saldoTotal: number, debitos: number[] },
	{ cliente:string, saldoTotal: number, debitos: number[] },
	{ cliente:string, saldoTotal: number, debitos: number[] },
];

type LiberarEmprestimo= [
    { cliente:string, saldoTotal: number, debitos: null[] },
	{ cliente:string, saldoTotal: number, debitos: null[] },
];

type Cliente= { cliente:string, saldoTotal: number, debitos: number[] };

const clientes: Clientes= [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: []},
];

const devedores= (array: Clientes):LiberarEmprestimo => {
    const liberarEmprestimo: any= [];
    
    array.forEach((obj:Cliente): void => {
        const saldoTotal: number= obj.saldoTotal;
        const somaDebitos= obj.debitos.reduce((acc: number, item:number): number => acc + item, 0);
        const resultado: number= saldoTotal - somaDebitos;

        if(resultado < 0){
            liberarEmprestimo.push({...obj, saldoTotal: resultado, debitos: []});
        };
    });
    
    return liberarEmprestimo;
};

console.log(devedores(clientes))
