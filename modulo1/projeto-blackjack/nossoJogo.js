// 1° Versão

const blackJack= () => {
   console.log("Boas vindas ao jogo de Blackjack!");


   if(confirm("Quer iniciar uma nova rodada?")) {
      const cartaUsuario = comprarCarta(); 
      const cartaUsuario2 = comprarCarta(); 
      const pontuacaoDoUsuario= cartaUsuario.valor + cartaUsuario2.valor;

      console.log(`Usuário - cartas: ${cartaUsuario.texto} ${cartaUsuario2.texto} - Pontuação ${pontuacaoDoUsuario}`);

      const cartaComputador = comprarCarta(); 
      const cartaComputador2 = comprarCarta(); 
      const pontuacaoDoComputador= cartaComputador.valor + cartaComputador2.valor;
      
      console.log(`Computador - cartas: ${cartaComputador.texto} ${cartaComputador2.texto} - Pontuação ${pontuacaoDoComputador}`);

      //Ganhador

      if(pontuacaoDoUsuario > pontuacaoDoComputador){
         console.log("O usuário ganhou!");

      }else if(pontuacaoDoComputador > pontuacaoDoUsuario){
         console.log("O computador ganhou!");

      }else{
         console.log("Empate!");
      }
      
   } else {
      console.log("O jogo acabou!");
   }
};

blackJack()





