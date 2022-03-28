// Considerando o array de usuários abaixo, crie uma função que receba este array como parâmetro e retorne uma lista com apenas os emails dos usuários “admin”. 

type Usuarios= [
    {name: string , email: string, role: string},
	{name: string , email: string, role: string},
	{name: string , email: string, role: string},
	{name: string , email: string, role: string},  
	{name: string , email: string, role: string},  
	{name: string , email: string, role: string},
]

type Usuario= {name: string , email: string, role: string};

const usuarios: Usuarios =[
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"},      
] 

const email= (array:Usuarios): string[] => {
    const arrayEmail: string[]= [];

    array.forEach((obj:Usuario): void => {obj.role === "admin" && arrayEmail.push(obj.email)});

    return arrayEmail;
};

console.log(email(usuarios));