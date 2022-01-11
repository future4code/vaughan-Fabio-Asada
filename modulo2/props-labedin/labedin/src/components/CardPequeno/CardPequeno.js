import React from "react";
import * as Card from "./CardPequenoEstilos";

export const CardPequeno= props => {

    const { titulo, email, foto} = props;
    const {Container, Imagem, Titulo, ContainerInformacoes } = Card;

    return(
        <React.Fragment>

            <Container>
                
                <Imagem src={foto}/>

                <ContainerInformacoes>

                    <Titulo>{titulo}</Titulo>
                    <p>{email}</p>
                    
                </ContainerInformacoes>

            </Container>
            

        </React.Fragment>

    )
};

