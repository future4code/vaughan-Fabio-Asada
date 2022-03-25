type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

//b- 
// Primerio iria criar o package.json, com o comando npm init.
// Dentro do package.json, no objeto "scripts", colocaria esse código "start": "tsc && node ./build/index.js"
// Depois no terminal digitaria npx tsc --init
// Dentro do tsconfig.json, colocaria esse código 
// {
//   "compilerOptions": {
//     "target": "es6",            /* Specify ECMAScript target version */
//     "module": "commonjs",       /* Specify module code generation */
//     "sourceMap": true,          /* Generates corresponding '.map' file. */
//     "outDir": "./build",        /* Redirect output structure to the directory. */
//     "rootDir": "./src",         /* Specify the root directory of input files. */
//     "removeComments": true,    /* Do not emit comments to output. */
//     "noImplicitAny": true       /* Raise error on declarations with an implied 'any' type. */
//     }
// }
// Criaria uma pasta src
// Dentro da pasta src, criaria um arquivo index.ts
// E por fim criaria uma pasta build
// Agora basta rodar o comando npm start, que o código em typescript será transformado em javascript.
// E esse código será guardado dentro da pasta build.


// c- Não seria diferente.

// d- Basta vc criar arquivos typescript no src, e depois no package.json vc ir adicionando novos comandos. Exemplo:
//"tsc && node ./build/index.js && node ./build/teste.js && node ./build/teste1.js && node ./build/teste2.js && node ./build/teste3.js"

console.log("Index.ts");