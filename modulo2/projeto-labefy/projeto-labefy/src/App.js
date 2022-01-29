import React from 'react';
import CriarPlaylist from "./components/CriarPlaylist/CriarPlaylist";
import MostrarPlaylist from "./components/MostrarPlaylist/MostrarPlaylist";
import Header from "./components/Header/Header"
import NomeMusicaDaPlaylist from "./components/NomeMusicasDaPlaylist/NomeMusicaDaPlaylist"
import Footer from "./components/Footer/Footer";

class App extends React.Component{
  state={
    mudaTela:"criar",
    nome:"",
    id:""
  }

  trocaTela= (tela, name, id) => {
    this.setState({mudaTela:tela, nome:name, id:id})
  }


  mostrarNaTelaDoUsuario= () => {
    switch(this.state.mudaTela){
      case "criar":
        return <CriarPlaylist/>;
      case "ver":
        return <MostrarPlaylist trocaTela={this.trocaTela}/>;
      case "informacoes":
        return <NomeMusicaDaPlaylist info={this.state.nome} id={this.state.id}/>;
      default:
        return <CriarPlaylist/>;
    }
  }

  

  render(){

    return (
      <div>
        
        <Header trocaTela={this.trocaTela}/>

        {this.mostrarNaTelaDoUsuario()}

        <Footer/>
        
      </div>
    );
  }
}

export default App;
