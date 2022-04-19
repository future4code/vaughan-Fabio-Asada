import axios from "axios";

const baseUrl= "https://viacep.com.br/ws";

export const pegarEndereco= async (cep:string) => {
    try{
        const informacoes= await axios.get(`${baseUrl}/${cep}/json`);
        return informacoes.data;
    }catch(error: any){
        console.log(error.message);
    }
};