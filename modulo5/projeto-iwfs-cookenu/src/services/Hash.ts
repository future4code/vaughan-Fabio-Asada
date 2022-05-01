import { genSaltSync, hashSync, compareSync } from "bcryptjs";

export class Hash{
    public gerarHash(senha:string): string{
        const cost= 12;
        const salt: string= genSaltSync(cost);
        const senhaCifrada: string= hashSync(senha, salt);

        return senhaCifrada;
    };

    public comparaHash(senha:string, senhaCifrada: string): boolean{
        return compareSync(senha, senhaCifrada);
    }
}