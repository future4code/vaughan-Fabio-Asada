import { body} from 'express-validator';

export const validatePhone= () => {
    return [
        body("second_phone").isNumeric().withMessage("Telefone precisa conter somente números."),
        body("second_phone").isLength({ min: 9, max:9 }).withMessage("Telefone precisa ter 9 números. Não adicione 'hífen'."),
    ];
};