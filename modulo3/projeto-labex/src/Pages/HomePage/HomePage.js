import React from "react";
import {HomePageContainer, Main, DivTextoImagem, DivParagrafoImagem, Paragrafo, H2, ImagemAstronauta, ImagemEstrelas, ImagemEstrelas2} from "./HomePageEstilos";
import HeaderPage from "../Header/Header";
import FooterPage from "../Footer/Footer";
import Astronauta from "../../assets/astronauta.png";
import Estrelas from "../../assets/estrelas.png";
import {EspacamentoHeader} from "../Espacamento/Espacamento";

const HomePage= () => {

    return(
        <HomePageContainer>
            <HeaderPage links={["Viagens", "Login"]} caminhos={["/trips/list", "/login"]}/>
            <EspacamentoHeader/>
            <Main>
                <DivTextoImagem>
                    <ImagemAstronauta src={Astronauta}/>
                    {/* <ImagemEstrelas src={Estrelas}/>
                    <ImagemEstrelas2 src={Estrelas}/> */}
                    
                </DivTextoImagem>

                <DivParagrafoImagem>
                    <div>
                        <H2>O lado sombrio da Força</H2>
                        <Paragrafo>A viagem futurista mais emblemática que você verá.</Paragrafo>
                        
                        <Paragrafo>Os Jedis que se preparem, pois a invasão será dos terrenhos.</Paragrafo>
                    </div>

                </DivParagrafoImagem>
            </Main>

            <FooterPage/>
        </HomePageContainer>
    )
};

export default HomePage;