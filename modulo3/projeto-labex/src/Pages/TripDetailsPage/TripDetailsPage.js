import React, {useState, useEffect} from "react";
import HeaderPage from "../Header/Header";
import FooterPage from "../Footer/Footer";
import {useProtecao} from "../ProtecaoDeRotas/ProtecaoDeRotas";
import axios from "axios";
import { useParams } from "react-router-dom";
import {TripContainer, H1, Paragrafo, Cards, ContainerCards, CardsNome, CardsDescricao, CardsProfissao, CardsNomeSpan, CardsNomePais, CardsNomeButtonAprovar, CardsNomeButtonReprovar, Aprovados, Paragrafo2, ContainerDescricaoDaViagem, DescricaoNome, DescricaoPlaneta, Descricao, DiasEData} from "./TripDetailsPageEstilos";
import {Espacamento} from "../Espacamento/Espacamento";
import {EspacamentoHeader} from "../Espacamento/Espacamento";

const TripDetailsPage= () => {
    useProtecao();
    const [detalhes, setDetalhes] = useState([])
    const id= useParams().id;
    
    useEffect(() => {
        const token= localStorage.getItem("token");
        
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio/trip/${id}`;

        const header={
            headers:{
                auth:token
            }
        };

        axios
            .get(url,header)    
            .then(response => {
                setDetalhes([response.data]);
            }) 
            .catch(error => console.log(error.response));   
    }, [detalhes]);

    const aprovacao= idDoCandidato => {
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio/trips/${id}/candidates/${idDoCandidato}/decide`;

        const token= localStorage.getItem("token");
        
        const header={
            headers:{
                "Content-Type":"application/json",
                "auth":token
            }
        } 

        const body={"approve": true};

        axios
            .put(url, body, header )
            .then(response => {
                console.log(response.data);
                alert("Decisão registrada com sucesso!")
            })
            .catch(error => console.log(error.response))
    }

    const reprovacao= idDoCandidato => {
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio/trips/${id}/candidates/${idDoCandidato}/decide`;

        const token= localStorage.getItem("token");
        
        const header={
            headers:{
                "Content-Type":"application/json",
                "auth":token
            }
        } 

        const body={"approve": false};

        axios
            .put(url, body, header )
            .then(response => {
                console.log(response.data)
                alert("Decisão registrada com sucesso!");
                
            })
            .catch(error => console.log(error.response))
    }

    const candidatosPendentes= candidates => { 
        return candidates.map(obj =>{
            return (
                <Cards>
                    <CardsNome>
                        {obj.name} 
                        <CardsNomeSpan>{obj.age} anos</CardsNomeSpan>
                    </CardsNome>
                    <CardsProfissao>{obj.profession}</CardsProfissao>

                    <CardsNomePais>{obj.country}</CardsNomePais>
                    <CardsDescricao>"{obj.applicationText}"</CardsDescricao>
    
                    <div>
                        <CardsNomeButtonAprovar onClick={() => aprovacao(obj.id)}>Aprovar</CardsNomeButtonAprovar>

                        <CardsNomeButtonReprovar onClick={() => reprovacao(obj.id)}>Reprovar</CardsNomeButtonReprovar>

                    </div>
                </Cards>
            ) 
        })
    };

    const candidatosAprovados= () => {
        if(detalhes.length){

            return detalhes[0].trip.approved.map(obj => <Aprovados>{obj.name}</Aprovados>);
        }
    }

    const descricaoDaViagem= () => {
        if(detalhes.length){
            const {name, description, planet, durationInDays, date, candidates, approved} = detalhes[0].trip;

            return(
                <TripContainer>
                    
                    <ContainerDescricaoDaViagem>
                    
                        <DescricaoNome>{name}</DescricaoNome>
                        <DescricaoPlaneta>{planet}</DescricaoPlaneta>
                        <Descricao>"{description}"</Descricao>
                        <DiasEData>
                            <p>{durationInDays} dias</p>
                            <p>{date}</p>

                        </DiasEData>
                    </ContainerDescricaoDaViagem>
                        <H1>Candidatos Pendentes</H1>
                    <ContainerCards>
                        {candidates.length?candidatosPendentes(candidates):
                        <Paragrafo2>Não há candidatos</Paragrafo2>}
                    </ContainerCards>
    
                    <div>
                        <H1>Candidatos Aprovados</H1>
                        {approved.length?candidatosAprovados(): <Paragrafo>Não há candidatos</Paragrafo>}
                    </div>

                    <Espacamento/>
                </TripContainer>
            ) 
        }
    }
    return(
        <div>
            <HeaderPage links={["Voltar"]} caminhos={["/admin/trips/list"]}/>
            <EspacamentoHeader/>
                {descricaoDaViagem()}
            
            <FooterPage/>
        </div>
    )
};

export default TripDetailsPage;