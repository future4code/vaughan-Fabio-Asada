var Setores;
(function (Setores) {
    Setores["MARKETING"] = "marketing";
    Setores["VENDAS"] = "vendas";
    Setores["FINANCEIRO"] = "financeiro";
})(Setores || (Setores = {}));
;
const colaboradores = [
    { nome: "Marcos", salario: 2500, setor: Setores.MARKETING, presencial: true },
    { nome: "Maria", salario: 1500, setor: Setores.VENDAS, presencial: false },
    { nome: "Salete", salario: 2200, setor: Setores.FINANCEIRO, presencial: true },
    { nome: "João", salario: 2800, setor: Setores.MARKETING, presencial: false },
    { nome: "Josué", salario: 5500, setor: Setores.FINANCEIRO, presencial: true },
    { nome: "Natalia", salario: 4700, setor: Setores.VENDAS, presencial: true },
    { nome: "Paola", salario: 3500, setor: Setores.MARKETING, presencial: true }
];
const presencial = (array) => {
    return array.filter((obj) => obj.setor === "marketing" && obj.presencial);
};
console.log(presencial(colaboradores));
//# sourceMappingURL=index.js.map