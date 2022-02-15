import React from "react";
import {HomePageContainer, Header, AreaViagensOuAdmin, Main, DivTextoImagem, DivParagrafoImagem, Paragrafo, Footer, Nome, Imagem, H2} from "./HomePageEstilos";
import Foguete from "../../assets/fogueteTratado.png";

const HomePage= () => {
    return(
        <HomePageContainer>
            <Header>

                <div><Imagem src={Foguete}/></div> 
                <AreaViagensOuAdmin>
                    <div>Viagens</div>
                    <div>Administração</div>
                </AreaViagensOuAdmin> 

            </Header>

            <Main>
                <DivTextoImagem>
                    texto + imagem
                </DivTextoImagem>

                <DivParagrafoImagem>
                    <div>
                        <H2>Ao infinito... e além!</H2>
                        <Paragrafo>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Paragrafo>
                        
                        <Paragrafo>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Paragrafo>
                    </div>

                    <div>imagem</div>
                </DivParagrafoImagem>
            </Main>

            <Footer>
                Desenvolvido por  &nbsp;<Nome> Fábio Asada</Nome> &nbsp; 2022 &nbsp;
            </Footer>
        </HomePageContainer>
    )
};

export default HomePage;