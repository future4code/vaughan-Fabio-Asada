ˋˋˋ

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  const verificarOcorencias= arrayDeNumeros.filter(item => item === numeroEscolhido);

  return verificarOcorencias.length?`O número ${numeroEscolhido} aparece ${verificarOcorencias.length}x`: 'Número não encontrado';
};


ˋˋˋ