import React from 'react';
import BuscarPlaylist from "./components/BuscarPlaylist/BucarPlaylist";
import MostrarPlaylist from "./components/MostrarPlaylist/MostrarPlaylist";

class App extends React.Component{
  
  render(){

    return (
      <div>

        <header>
          <p>Criar</p>
          <p>Ver lista</p>
        </header>
        
        <BuscarPlaylist/>
        <MostrarPlaylist/>
      </div>
    );
  }
}

export default App;
