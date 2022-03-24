import React, {useState, useEffect} from "react";
import HeaderPage from "../Header/Header";
import FooterPage from "../Footer/Footer";
import axios from "axios";
import {Fundo, DivContainer, H1, Cards, ParagrafoTitulo, Span, DataEDuracao, Descricao, TextoDescricao, Planeta, ParagrafoDuracao, DivImg, LoadingImg, ParagrafoData} from "./ListTripsPageEstilos";
import {Espacamento} from "../Espacamento/Espacamento";
import Foguete from "../../assets/loading.gif";
import {EspacamentoHeader} from "../Espacamento/Espacamento";

const ListTripsPages= () => {
    const [listaDeViagens, setListaDeViagens]= useState([]);

    useEffect(() => {
        const url="https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio/trips";

        axios
            .get(url)
            .then(response =>{ setListaDeViagens(response.data.trips);
            
            const dadosDaViagem= JSON.stringify(response.data.trips);
            localStorage.setItem("viagem", dadosDaViagem);
            })
            .catch(error => console.log(error.response) )
    }, [])


    const viagens= listaDeViagens.map((obj, index) => {
        return(
            <DivContainer key={index}>
                <ParagrafoTitulo>{obj.name}</ParagrafoTitulo>
                <Planeta>{obj.planet}</Planeta>

                <Descricao><Span>Descrição</Span><TextoDescricao>"{obj.description}"</TextoDescricao></Descricao>

                <DataEDuracao>

                    <ParagrafoDuracao><Span>Duração</Span><br/>{obj.durationInDays} dias</ParagrafoDuracao>

                    <ParagrafoData><Span>Data</Span><br/> {obj.date}</ParagrafoData>

                </DataEDuracao>
            </DivContainer>
        )
    })
    
    return(
        <Fundo>
            <HeaderPage links={["Voltar", "Inscrever-se"]} caminhos={["/", "/trips/application"]}/>
            <EspacamentoHeader/>
            <Cards>
                {listaDeViagens.length? viagens: <DivImg><LoadingImg src={Foguete}/></DivImg>}
            </Cards>

            <Espacamento></Espacamento>
            <FooterPage/>
        </Fundo>
    )
};

export default ListTripsPages;