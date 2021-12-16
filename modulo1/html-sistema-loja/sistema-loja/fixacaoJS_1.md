ˋˋˋ
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 
    const comissaoPorNumeroDeCarro= qtdeCarrosVendidos * 100; 
    const porcentagemDeCadaCarro= valorTotalVendas * 0.05;
    const comissao= comissaoPorNumeroDeCarro + porcentagemDeCadaCarro;
    const salario= comissao + 2000;
     
    return salario;
};

ˋˋˋ