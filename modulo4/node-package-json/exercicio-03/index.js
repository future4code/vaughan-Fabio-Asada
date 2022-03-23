const fs= require('fs');

const addTarefa= process.argv[2];
const listaDeTarefas= "Pagar as contas";

fs.appendFileSync("data.txt", `-${addTarefa}`);
const tarefa= fs.readFileSync("data.txt", "utf8");
const string=listaDeTarefas+tarefa;

console.log("Tarefa adicionada com sucesso!")
console.log(string.split("-"));




