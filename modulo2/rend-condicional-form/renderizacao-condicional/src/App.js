import React from "react";
import DadosGerais from "./Components/DadosGerais/DadosGerais";
import EnsinoSuperior from "./Components/EnsinoSuperior/EnsinoSuperior";
import SemFaculdade from "./Components/SemFaculdade/SemFaculdade";
import Agradecimentos from "./Components/Agradecimentos/Agradecimentos";


class App extends React.Component{
  state={
    promixaEtapa:false,
    promixaEtapa2:false,
    promixaEtapa3:false,
    escolaridade:"Ensino médio incompleto"
  }

  proximaEtapa= () => {
    this.setState({promixaEtapa:true})
  }
  proximaEtapa2= () => {
    this.setState({promixaEtapa2:true})
  }
  proximaEtapa3= () => {
    this.setState({promixaEtapa3:true})
  }

  grauDeEscolaridade= valor => {
    this.setState({escolaridade:valor})
  };

  render(){
        let componenteRenderizado;
        

        if(this.state.promixaEtapa){

          if(this.state.escolaridade === "Ensino médio incompleto" || this.state.escolaridade === "Ensino médio completo" ){

            componenteRenderizado= <SemFaculdade finalizando={this.proximaEtapa3}/>;

          }else{

            componenteRenderizado= <EnsinoSuperior proximaEtapa={this.proximaEtapa3}/>;
          }

        }else{
          componenteRenderizado= <DadosGerais proximaEtapa={this.proximaEtapa} escolaridade={this.grauDeEscolaridade}/>
        }

        if(this.state.promixaEtapa2){
        
          componenteRenderizado= <SemFaculdade finalizando={this.proximaEtapa3}/>;
        }

        if(this.state.promixaEtapa3){
          componenteRenderizado= <Agradecimentos/>;
        }

        return(
            <div>

                {componenteRenderizado}

            </div>
        )
    }
};

export default App;
