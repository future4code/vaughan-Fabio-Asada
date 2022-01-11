import React from 'react';
import * as Card from "./CardGrandeEstilo";

function CardGrande(props) {

    const { Container, Imagem, ContainerInformacoes, Titulo} = Card;
    const {imagem, nome,  descricao, medida}= props;

    return (
        <Container>
            <Imagem src={ imagem } medida={ medida }/>

            <ContainerInformacoes>

                <Titulo>{ nome }</Titulo>
                <p>{ descricao }</p>

            </ContainerInformacoes>

        </Container>
    )
}

export default CardGrande;