import React, {useState, useEffect} from "react";
import {Container, ContainerLista ,Imagem, Buttom, ButtomExcluir} from "./EscolhidosEstilos";
import axios from "axios";

const Escolhidos= props => {
    const [listaDeMatches, setListaDeMatches] = useState([])

    useEffect(() => deramMatches(), [])

    const deramMatches= () => {
        const url= "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabio/matches";

        const header={
            headers:{
                Authorization: "fabio-asada-vaughan" 
            }};

        axios
            .get(url, header)
            .then(response => setListaDeMatches(response.data.matches))
            .catch(error => console.log(error.response.data))
    }

    const renderizarLista= () => {
        if(listaDeMatches.length){
            return listaDeMatches.map((obj, index) => {
                return(
                    <ContainerLista key={index}>
                        <p>
                            <Imagem src={obj.photo}/> 
                        </p>

                        <h4>
                            {obj.name} 
                        </h4>
                    </ContainerLista>
                    
                )
            })
        }
    };

    const limparLista= () => {
        const url= "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabio/clear";

        const header={
            headers:{
            "Content-Type":"application/json"
        }}

        axios
            .put(url, header)
            .then(response => {
                console.log(response.data)
                setListaDeMatches([]);
            })
            .catch(error => console.log(error.response.data))
    };
    
    return(
        <>
            <Container>
                <Buttom onClick={props.trocarTela}>Voltar</Buttom>
                <h3>AstroMatch</h3>
                <ButtomExcluir onClick={limparLista}>Limpar</ButtomExcluir>
            </Container>
            <hr/>
            {renderizarLista()}
        </>
    )
};

export default Escolhidos;