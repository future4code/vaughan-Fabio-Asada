import { body } from 'express-validator';

export const validations= () => {
    return [
        body("name").isString().withMessage("Nome precisa ter somente caracteres."),
        body("name").isLength({min:3}).withMessage("Nome precisa ter no mínimo 3 caracteres."),
        body("surname").isString().withMessage("Sobrenome precisa ter somente caracteres."),
        body("surname").isLength({min:3}).withMessage("Sobrenome precisa ter no mínimo 3 caracteres."),
        body("phone").isNumeric().withMessage("Telefone precisa conter somente números."),
        body("phone").isLength({ min: 9, max:9 }).withMessage("Telefone precisa ter 9 números. Não adicione 'hífen'."),
    ];
}