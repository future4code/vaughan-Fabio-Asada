import React from 'react';
import * as Button from "./ImagemButtonEstilos";

function ImagemButton(props) {

    const {imagem, texto} = props;
    const {Container, Imagem} = Button;

    return (
        <Container>

            <Imagem src={ imagem }/>
            <p>{ texto }</p>
            
        </Container>

    )
}

export default ImagemButton;