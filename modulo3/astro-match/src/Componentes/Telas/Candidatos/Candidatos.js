import React, {useState, useEffect} from "react";
import {Header, ContainerInfo, Image, DivContainer, DivInfo, NomeIdade, DivButtom, ImgCoracao, ImgBotas, Buttom} from "./CandidatosEstilos";

import axios from "axios";

import Heart from "../../../Assets/heart.png";
import Botas from "../../../Assets/botas.png";

const Candidatos= props => {
    const [candidato, setCandidato] = useState([{}]);

    useEffect(() => buscarCandidatos(), [])

    const buscarCandidatos= () => {
        const url= `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabio/person`;

        const header= {headers:{
            Authorization: "fabio-asada-vaughan"}}
        
        axios
            .get(url, header)
            .then(response => setCandidato([response.data.profile]))
            .catch(error => console.log(error.response.data))
    }
    
    const dadosDoCandidato= () => {
        return(
            <ContainerInfo>
                <Image src={candidato[0].photo}/>

                <DivContainer>

                    <DivInfo>
                        <NomeIdade>
                            <h3>{candidato[0].name}</h3>
                            <p>{candidato[0].age? `${candidato[0].age} anos`: ""}</p>
                        </NomeIdade>

                        <p>{candidato[0].bio}</p>

                    </DivInfo>

                </DivContainer>
            </ContainerInfo>
        )
    };

    const gostei= () => {
        const url='https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabio/choose-person';

        const body = {
            "id": `${candidato[0].id}`,
            "choice": true
        }

        const header= {headers:{
            "Content-Type": "application/json"}}

        axios   
            .post(url, body, header)
            .then(response => {
                console.log(response.data)
                buscarCandidatos();
            })
            .catch(error => console.log(error.response.data))
    };

    const naoGostei= () => {
        buscarCandidatos()
    }
    
    return(
        <>
            <Header>
                <h3>AstroMatch</h3>
                <Buttom onClick={props.trocarTela}>Adicionados</Buttom>
            </Header>

            <div>
                {dadosDoCandidato()}
            </div>

            <DivButtom>
                <ImgBotas src={Botas} onClick={naoGostei}/>
                <ImgCoracao src={Heart} onClick={gostei}/>
            </DivButtom>
            
        </>
    )
};

export default Candidatos;