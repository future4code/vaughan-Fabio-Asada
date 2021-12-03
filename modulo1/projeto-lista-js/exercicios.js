// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!');

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Digite a altura do retângulo."));
  const largura  = Number(prompt("Digite a largura do retângulo."));
  const area= largura * altura;

  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual= prompt("Digite o ano atual."); 
  const anoDeNascimento = prompt("Digite o ano do seu nascimento."); 
  const idade= anoAtual - anoDeNascimento;

  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura ** 2);

  return imc;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome= prompt("Digite seu nome.");
  const idade = prompt("Digite sua idade.");
  const email= prompt("Digite seu email.");

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1= prompt("Digite sua cor favorita.");
  const cor2= prompt("Digite sua segunda cor favorita.");
  const cor3= prompt("Digite sua terceira cor favorita.");

  console.log([cor1, cor2, cor3]);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroElemento= array.shift();
  const ultimoElemento= array.pop();

  array.push(primeiroElemento);
  array.unshift(ultimoElemento);

  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const anoAtual= Number(prompt("Em que ano estamos?"));
  const anoNascimento= Number(prompt("Em que ano você nasceu?"));
  const anoDaCarteiraDeRg = Number(prompt("Em que ano sua carteira de identidade foi emitida?"));

  const idade= anoAtual - anoNascimento;
  const renovar= anoAtual - anoDaCarteiraDeRg;
  
  if(idade <= 20){
    
    if(renovar >= 5){

      console.log(true);
    }else{
      console.log(false);
    }

  }else if(idade > 20 && idade <= 50){
    
    if(renovar >= 10){

      console.log(true);
    }else{
      console.log(false);
    }

  }else{
    if(renovar >= 15){

      console.log(true);
    }else{
      console.log(false);
    }
  }

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  if(ano % 4 === 0){
    if(ano % 100 === 0){
      if(ano % 400 === 0){
        return true;
      }else{
        return false;
      }
    }else{
      return true;
    }
  }else{
      return false;
  }
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const pergunta1= prompt("Você tem mais de 18 anos?").toLowerCase();
  const pergunta2= prompt("Você possui ensino médio completo?").toLowerCase();
  const pergunta3= prompt("Você possui disponibilidade exclusiva durante os horários do curso?").toLowerCase();
  const tudoSim= pergunta1 === "sim" && pergunta2 === "sim" && pergunta3 === "sim";

  if(tudoSim){
    console.log(true);
  }else{
    console.log(false);
  }
}