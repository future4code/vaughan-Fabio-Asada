import React, {useState} from "react";
import {Container} from "./HomeEstilos";
import Candidatos from "../Telas/Candidatos/Candidatos";
import Escolhidos from "../Telas/Escolhidos/Escolhidos";

const Home= () => {
    const [mostrarCandidatos, setMostrarCandidatos]= useState(false);

    const trocarTela= () => {
        setMostrarCandidatos(!mostrarCandidatos)
    }

    return(
        <Container>
            
           {mostrarCandidatos? 
            <Escolhidos trocarTela={trocarTela}/>: 
            <Candidatos trocarTela={trocarTela}/>}

        </Container>
    )
};

export default Home;