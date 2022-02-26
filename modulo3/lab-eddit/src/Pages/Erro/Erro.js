import React from "react";
import Error from "../../assets/erro.jpg";
import {Container, Imagem} from "./styled";

const Erro= () => {

    return(
        <Container>
            <Imagem src={Error}/>
        </Container>
    )
};

export default Erro;