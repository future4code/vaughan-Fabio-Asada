// Escreva uma função que receba uma string e retorne a string reversa. 
//Em outras palavras, se o input da sua função for "abcd", a saída deve ser "dcba" .

const reverse= (frase:string): string => {
    const array: string[]= frase.split("");

    return array.reverse().join("");
};

console.log(reverse("abcd"))
