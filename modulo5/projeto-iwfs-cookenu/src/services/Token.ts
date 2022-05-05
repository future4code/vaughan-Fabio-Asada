import * as jwt from "jsonwebtoken";

export interface dadosAutenticados {
    id: string;
}

export class Token{
    public gerarToken(id: string): string{
        const chaveSecreta= process.env.JWT_KEY as string;
        const tempoDuracao={expiresIn: "1h"};
        
        const token= jwt.sign({id}, chaveSecreta, tempoDuracao);

        return token;
    };

    public verificarToken(token:string): dadosAutenticados{
        const chaveSecreta= process.env.JWT_KEY as string;
        const dadosDoToken= jwt.verify(token, chaveSecreta);

        return dadosDoToken as dadosAutenticados;
    }
}

