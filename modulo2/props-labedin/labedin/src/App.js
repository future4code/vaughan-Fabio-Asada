import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

import { CardPequeno } from "./components/CardPequeno/CardPequeno";
import foto from "./imagem/foto.jpg";
import email from "./imagem/email.svg";
import local from "./imagem/local.svg";
import nasa from "./imagem/imgNasa.jpg";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto} 
          nome="Fábio Asada" 
          descricao="Oi, eu sou o Fábio Asada. Estudande de programação na Labenu, e amigo do Astrodev."
          medida="70px"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno titulo="Email" email="tocomsono@hotmail.com" foto={email}/>

        <CardPequeno titulo="Endereço" email="Rua do Limoeiro" foto={local}/>

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
          medida="70px" 
        />
        
        <CardGrande 
          imagem={nasa} 
          nome="NASA" 
          descricao="Apontando defeitos."
          medida="100px" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
