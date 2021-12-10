
// 2° Versão

const mostrarMensagem = () => {
   const cartaUsuario = comprarCarta(); 
   const cartaUsuario2 = comprarCarta(); 
   const pontuacaoDoUsuario= cartaUsuario.valor + cartaUsuario2.valor;

   console.log(`Usuário - cartas: ${cartaUsuario.texto} ${cartaUsuario2.texto} - Pontuação ${pontuacaoDoUsuario}`);

   const cartaComputador = comprarCarta(); 
   const cartaComputador2 = comprarCarta(); 
   const pontuacaoDoComputador= cartaComputador.valor + cartaComputador2.valor;
   
   console.log(`Computador - cartas: ${cartaComputador.texto} ${cartaComputador2.texto} - Pontuação ${pontuacaoDoComputador}`);

   return [pontuacaoDoUsuario, cartaUsuario, cartaUsuario2, pontuacaoDoComputador, cartaComputador, cartaComputador2];
}



const blackJack2= () => {
   console.log("Boas vindas ao jogo de Blackjack!");
   const soma= [];

   if(confirm(`Boas vindas ao jogo de Blackjack!\nQuer iniciar uma nova rodada?`)) {
    
      const [
         pontuacaoDoUsuario, 
         cartaUsuario, 
         cartaUsuario2, 
         pontuacaoDoComputador, 
         cartaComputador, 
         cartaComputador2
      ] = mostrarMensagem();

      // Implementação
      
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

      if(confirm(`Suas cartas são ${cartaUsuario.texto} ${cartaUsuario2.texto}. A carta revelada do computador é ${cartaComputador.texto}.\nDeseja comprar mais uma carta?`)){
         
   


      }else{
         console.log("====> Aqui Fora")
      }


      //Ganhador
      // if(pontuacaoDoUsuario > pontuacaoDoComputador){
      //    console.log("O usuário ganhou!");

      // }else if(pontuacaoDoComputador > pontuacaoDoUsuario){
      //    console.log("O computador ganhou!");

      // }else{
      //    console.log("Empate!");
      // }
      
   } else {
      console.log("O jogo acabou!");
   }
};

blackJack2();

