export const validateEmail= (email: string): any => {
    if(typeof email === 'undefined'){
        return "";
    };
    
    if(typeof email === 'number' || typeof email === 'boolean'){
        return "No campo Email insira somente caracteres.";
    };
    
    if(email.length === 0){
        return "O campo email está vazio.";
    };

    if(!email.includes("@")){
        return "No campo Email, está faltando '@'";
    };

    if(!email.includes(".")){
        return "No campo Email, está faltando '.'";
    };
}