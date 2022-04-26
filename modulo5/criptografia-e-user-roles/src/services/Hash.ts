import { genSaltSync, hashSync, compareSync } from "bcryptjs"

export class Hash{
    generateHash(senhaUsuario: string): string{
        // senhaUsuario: senha que o usuário usou para se cadastrar.
        const cost= 12;
        const salt: string= genSaltSync(cost);
        const senhaCifrada: string= hashSync(senhaUsuario, salt);

        return senhaCifrada;
    };

    compararHash(senhaUsuario:string, senhaCifrada: string): boolean{
        // senhaUsuario: senha que o usuário se logou no site.
        // senhaCifrada: senha cifrada guardada no Banco de dados.
        return compareSync(senhaUsuario, senhaCifrada);
    };
}