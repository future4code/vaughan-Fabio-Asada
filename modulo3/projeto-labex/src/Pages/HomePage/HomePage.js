import React from "react";
import {HomePageContainer, Main, DivTextoImagem, DivParagrafoImagem, Paragrafo, H3} from "./HomePageEstilos";
import HeaderPage from "../Header/Header";
import FooterPage from "../Footer/Footer";

const HomePage= () => {

    return(
        <HomePageContainer>
            <HeaderPage links={["Home", "Viagens", "Login"]} caminhos={["/", "/trips/list", "/login"]}/>

            <Main>
                <DivTextoImagem>
                    texto + imagem
                </DivTextoImagem>

                <DivParagrafoImagem>
                    <div>
                        <H3>Ao infinito... e além!</H3>
                        <Paragrafo>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Paragrafo>
                        
                        <Paragrafo>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Paragrafo>
                    </div>

                    <div>imagem</div>
                </DivParagrafoImagem>
            </Main>

            <FooterPage/>
        </HomePageContainer>
    )
};

export default HomePage;