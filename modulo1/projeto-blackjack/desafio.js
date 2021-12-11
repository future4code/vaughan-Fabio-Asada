
// 2° Versão
const mostrarMensagem = () => {
   const cartaUsuario = comprarCarta(); 
   const cartaUsuario2 = comprarCarta(); 
   const pontuacaoDoUsuario= cartaUsuario.valor + cartaUsuario2.valor;

   const cartaComputador = comprarCarta(); 
   const cartaComputador2 = comprarCarta(); 
   const pontuacaoDoComputador= cartaComputador.valor + cartaComputador2.valor;
   
   return [pontuacaoDoUsuario, cartaUsuario, cartaUsuario2, pontuacaoDoComputador, cartaComputador, cartaComputador2];
};

const blackJack2= () => {
   const soma= [];
   const somaComputador= [];

   if(confirm(`Boas vindas ao jogo de Blackjack!\nQuer iniciar uma nova rodada?`)) {

      const [
         pontuacaoDoUsuario, 
         cartaUsuario, 
         cartaUsuario2, 
         pontuacaoDoComputador, 
         cartaComputador, 
         cartaComputador2
      ] = mostrarMensagem();

      soma.push(cartaUsuario.texto, cartaUsuario2.texto);
      somaComputador.push(cartaComputador.texto, cartaComputador2.texto);
      
      // Se as 2 cartas forem iguais a AA;
      if(pontuacaoDoUsuario === 22 || pontuacaoDoComputador === 22){
         if(confirm("Suas cartas foram dois A, vamos sortear novamente?")){
            
            const [
               pontuacaoDoUsuario, 
               cartaUsuario, 
               cartaUsuario2, 
               pontuacaoDoComputador, 
               cartaComputador, 
               cartaComputador2
            ] = mostrarMensagem();

         }else{
            alert("Volte sempre!");
         };
      };

      let pontos= pontuacaoDoUsuario;
      let pontosComputador= pontuacaoDoComputador;

      while (pontos < 21) {
         
         const [
            pontuacaoDoUsuario, 
            cartaUsuario, 
            cartaUsuario2, 
            pontuacaoDoComputador, 
            cartaComputador, 
            cartaComputador2
         ] = mostrarMensagem();
         
         pontos += cartaUsuario.valor;
         
         if(confirm(`Suas cartas são ${soma}. A carta revelada do computador é ${cartaComputador.texto}.\nDeseja comprar mais uma carta?`)){
            soma.push(cartaUsuario.texto);
            
            if(pontos > 21){
               
               alert(`Usuário - cartas: ${soma} - Pontuação ${pontos}\nComputador - cartas: ${cartaComputador.texto} ${cartaComputador2.texto} - Pontuação ${pontuacaoDoComputador}\nComputador Ganhou!`);

            }
         
         }else{

            while(pontosComputador <= 21){
               pontosComputador += cartaComputador.valor;

               if(confirm(`Usuário - cartas: ${soma} - Pontuação ${pontos - cartaUsuario.valor}\nCartas do computador são ${somaComputador}.\nDeseja comprar mais uma carta?`)){
                  somaComputador.push(cartaComputador.texto);

                  if(pontosComputador >= 21){
                     
                     alert(`Usuário - cartas: ${soma} - Pontuação ${pontos - cartaUsuario.valor}\nComputador - cartas: ${somaComputador} - Pontuação ${pontosComputador}\nUsuário Ganhou!`);
   
                  }
               }else{
                  

                  if(pontos - cartaUsuario.valor > pontosComputador - cartaComputador.valor){

                     alert(`Usuário - cartas: ${soma} - Pontuação ${pontos - cartaUsuario.valor}\nComputador - cartas: ${somaComputador} - Pontuação ${pontosComputador - cartaComputador.valor}\nUsuário Ganhou!`);

                  }else if(pontosComputador - cartaComputador.valor> pontos - cartaUsuario.valor){

                     alert(`Usuário - cartas: ${soma} - Pontuação ${pontos - cartaUsuario.valor}\nComputador - cartas: ${somaComputador} - Pontuação ${pontosComputador - cartaComputador.valor}\nComputador Ganhou!`);

                  }else{

                     alert(`Usuário - cartas: ${soma} - Pontuação ${pontos - cartaUsuario.valor}\nComputador - cartas: ${somaComputador} - Pontuação ${pontosComputador - cartaComputador.valor}\nEmpate!`);
                  }

                  pontosComputador= 22;
               }
            }
         }
      }
   } else {
      alert("O jogo acabou!");
   }
};

blackJack2();

