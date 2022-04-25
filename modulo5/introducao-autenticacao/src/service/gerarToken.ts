import * as jwt from "jsonwebtoken";
import {Autenticacao} from "../Tipos/tipos";
import dotenv from "dotenv";

dotenv.config();

export const gerarToken= (input: Autenticacao): string => {
    const token= jwt.sign(
        {id:input.id},
        process.env.JWT_KEY as string,
        {expiresIn:"50min"}
    );

    return token;
}; 