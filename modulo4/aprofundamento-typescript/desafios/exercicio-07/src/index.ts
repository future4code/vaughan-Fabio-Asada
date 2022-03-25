type Produtos= [nome:string, preco:number, classificacao: string]
type Desconto= [nome:string, preco:number, classificacao: string, desconto:number];

const produto:Produtos= ["bermuda", 120, "íntimas"]

const blackFriday= (array:Produtos): Desconto => {
    const addItem: Desconto= [...array, 454]
    
    if(array[2] === "verão"){
        
        addItem.pop();
        addItem.push(array[1] - (array[1] * 0.05));

    }else if(array[2] === "inverno"){
        
        addItem.pop();
        addItem.push(array[1] - (array[1] * 0.1));

    }else if(array[2] === "banho"){

        addItem.pop();
        addItem.push(array[1] - (array[1] * 0.04));

    }else if(array[2] === "íntimas"){
        
        addItem.pop();
        addItem.push(array[1] - (array[1] * 0.07));

    }

    return addItem;
};

console.log(blackFriday(produto));