import express, {Request, Response} from "express";
import cors from "cors";
import {Produtos, produtos} from "./data";

const app= express();

app.use(express.json());
app.use(cors());

// Exercício 01
app.get("/test", (req:Request, res: Response) => {
    res.status(200).send("API está funcionando corretamente.");
});

// Exercício 03 e 07
app.post("/produtos/adicionar", (req:Request, res:Response) => {
    
    try{
        const authorization= req.headers.authorization;
        const name: string= req.body.name;
        const price: number= req.body.price;
        const id: string= String(produtos.length + 1);
    
        if(!name ||!price){
            throw new Error("Nome ou preço, não informados corretamente.");
        }else if(typeof name !== "string"){
            throw new Error("Nome é diferente de string.");
        }else if(typeof price !== "number"){
            throw new Error("Price é diferente de number.");
        }else if(price <= 0){
            throw new Error("Price não pode ser menor ou igual a zero.");
        }else if(authorization === "fabio-asada-vaughan"){
            produtos.push({id, name, price});
            throw new Error("Produto adicionado com sucesso!");
        }else{
            throw new Error("Algum erro aconteceu, e eu não sei o que foi! kkkkkk");
        }

    }catch(e: any){
        switch(e.message){
            case "Nome ou preço, não informados corretamente.":
                res.status(422).send(e.message);
                break;
            case "Nome é diferente de string.":
                res.status(422).send(e.message);
                break;
            case "Price é diferente de number.":
                res.status(422).send(e.message);
                break;
            case "Price não pode ser menor ou igual a zero.":
                res.status(422).send(e.message);
                break;
            case "Price não pode ser menor ou igual a zero.":
                res.status(422).send(e.message);
                break;
            case "Produto adicionado com sucesso!":
                res.status(201).send(produtos);
                break;
            default:
                res.status(500).send(e.message);
        }
    }
});

// Exercício 04
app.get("/produtos", (req:Request, res:Response) => {
    res.status(200).send(produtos);
});

// Exercício 05 e 08
app.put("/produto/:id/price", (req: Request, res: Response) => {
    let codeError: number= 400;

    try{
        const authorization= req.headers.authorization;
        const id: string= req.params.id;
        const price= req.body.price;
        let atualizacaoDeproduto: Produtos[]= produtos.filter(obj => obj.id === id);

        if(!price){
            codeError= 422;
            throw new Error("Preencha corretamente o campo do Preço.");
        }else if(typeof price !== "number"){
            codeError= 422;
            throw new Error("Preço é diferente de number.");
        }else if(price <= 0){
            codeError= 422;
            throw new Error("Preço não pode ser menor ou igual a zero.");
        }else if(!atualizacaoDeproduto.length){
            codeError= 422;
            throw new Error("Produto não encontrado.");

        }else if(authorization === "fabio-asada-vaughan"){

            atualizacaoDeproduto= produtos.map((obj:Produtos): Produtos => {
                if(obj.id === id) return {...obj, price:price};
        
                return obj;
            })

            res.status(201).send(atualizacaoDeproduto);
        }else{
            codeError= 500;
            throw new Error("Ocorreu um erro. Tente novamente.");
        }

    }catch(error: any){
        res.status(codeError).send(error.message);
    }
    
});

// Exercício 06 e 09
app.delete("/produto/:id", (req:Request, res:Response) => {
    let codeError: number= 400;

    try{
        const authorization= req.headers.authorization;
        const id: string= req.params.id;
        const produtoDeletado: Produtos[]= produtos.filter((obj:Produtos): boolean => obj.id !== id);
        const produtoNaoEncontrado: Produtos[]= produtos.filter((obj:Produtos): boolean => obj.id === id);

        if(!produtoNaoEncontrado.length){
            codeError= 422;
            throw new Error("Produto não encontrado.");

        }else if(authorization === "fabio-asada-vaughan"){

            res.status(201).send(produtoDeletado);
        }else{
            codeError= 500;
            throw new Error("Ocorreu um erro. Tente novamente mais tarde.");
        }

    }catch(error: any){
        res.status(codeError).send(error.message);
    }
    
});

app.listen(3003, () => console.log("Servidor criado na porta 3003"));