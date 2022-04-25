import * as jwt from "jsonwebtoken";
import { Autenticacao } from "../Tipos/tipos";
import dotenv from "dotenv";

dotenv.config();

export const verificarToken= (token:string): Autenticacao => {
    const payload= jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result= {id: payload.id};
    return result;
};

