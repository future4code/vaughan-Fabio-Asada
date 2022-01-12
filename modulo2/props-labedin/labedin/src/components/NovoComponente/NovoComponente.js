import React from "react";
import * as Card from "./NovoComponenteEstilos";

import tennis from "../../imagem/tennis.jpg";
import viagem from "../../imagem/viagem.jpg";
import musica from "../../imagem/musica.webp";

export const NovoComponente= props => {

    const { Container, MiniDivs, Titulo, Imagens} = Card;

    return(

        <React.Fragment>

            <Container>

                <MiniDivs>
                    <Titulo>Tennis</Titulo>
                    <Imagens src={tennis}/>

                </MiniDivs>

                <MiniDivs>
                    <Titulo>Viagem</Titulo>
                    <Imagens src={viagem}/>
                </MiniDivs>

                <MiniDivs>
                    <Titulo>Música</Titulo>
                    <Imagens src={musica}/>
                </MiniDivs>


            </Container>

        </React.Fragment>
    )
}