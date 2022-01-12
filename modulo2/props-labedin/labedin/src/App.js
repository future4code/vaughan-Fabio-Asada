import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

import { CardPequeno } from "./components/CardPequeno/CardPequeno";
import { NovaSecao } from "./components/NovaSecao/NovaSecao"; 


import foto from "./imagem/foto.jpg";
import email from "./imagem/email.svg";
import local from "./imagem/local.svg";
import star from "./imagem/star.svg";
import avenger from "./imagem/avenger.jpg";
import html5 from "./imagem/html5.png";
import css3 from "./imagem/css3.png";
import js from "./imagem/js.png";
import react from "./imagem/react.png"

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto} 
          nome="Fábio Asada" 
          descricao="Oi, eu sou o Fábio Asada. Estudande de programação na Labenu, e melhor amigo do Astrodev."
          medida="70px"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno titulo="Email" email="tocomsono@hotmail.com" foto={email}/>

        <CardPequeno titulo="Endereço" email="Rua Roger Federer" foto={local}/>

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={avenger} 
          nome="O Soldado Invisível" 
          descricao="Participei da grande batalha contra Thanos. Com meus poderes de invisibilidade, que só funcionam quando meus oponentes fecham seus olhos. Pude contribuir para a vitória dos vingadores." 
          medida="70px" 
        />
        
        <CardGrande 
          imagem={star} 
          nome="Jedi" 
          descricao="Em minhas missões pelo espaço, me deparei com inúmeras criaturas. E de todas elas, a que mais chamou minha atenção, foi 'Yoda'. Um grande Jedi. Me tornei seu discípulo, e juntos enfrentamos as forças do mal."
          medida="100px" 
        />
      </div>


{/* ================= DESAFIO 1 ============================= */}

      <div className="page-section-container">
        <h2>Competências</h2>

        <CardGrande 
          imagem={html5} 
          nome="HTML5"
          medida="100px" 
          descricao="HTML5 (Hypertext Markup Language, versão 5) é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software.[1] É a quinta versão da linguagem HTML." />

        <CardGrande 
          imagem={css3} 
          nome="CSS3"
          medida="70px" 
          descricao="CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets (ou simplesmente CSS), pela qual se define estilos para um projeto web (página de internet). Assim, o CSS3 facilitará o trabalho dos profissionais de front-end e também a utilização de sites pelos usuários." />

        <CardGrande 
          imagem={js} 
          nome="JavaScript"
          medida="100px" 
          descricao="JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web."/>

        <CardGrande  
          imagem={react} 
          nome="React JS"
          medida="100px" 
          descricao="O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros."/>

      </div>


{/* ================= DESAFIO 2 ============================= */}

      <NovaSecao/>


{/* ============================================================= */}
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
