import React, {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import Rotas from "./Rotas/Rotas";
import Header from "./Pages/Header/Header";

function App() {
  const token= localStorage.getItem("token");
    const [logado, setLogado]= useState(token? "Logout": "Login" );


  return (
    <BrowserRouter>
      <Header logado={logado} setLogado={setLogado}/>
      <Rotas setLogado={setLogado}/>
    </BrowserRouter>
  )

}

export default App;
