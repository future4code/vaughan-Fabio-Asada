const convertendoEmRna= (dna:string): string => {
    const array:string[] = dna.split("")
    const arrayRna: string[]= array.map((item:string): string => {
        if(item === "A"){
            return "U"
        }else if(item === "T"){
            return "A"
        }else if(item === "C"){
            return "G"
        }else{
            return "C"
        }
    });
    
    return arrayRna.join("");
};

console.log(convertendoEmRna("ATTGCTGCGCATTAACGACGCGTA"));