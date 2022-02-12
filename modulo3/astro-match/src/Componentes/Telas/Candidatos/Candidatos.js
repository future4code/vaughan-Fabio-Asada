import React, {useState, useEffect} from "react";
import {Header, ContainerInfo, Image, DivContainer, DivInfo, NomeIdade, DivButtom, ImgCoracao, ImgBotas, Buttom, Loading, H3} from "./CandidatosEstilos";
import PopUp from "../PopUp/PopUp";

import axios from "axios";

import Heart from "../../../Assets/heart.png";
import Botas from "../../../Assets/botas.png";
import Carregando from "../../../Assets/loading.gif";

const Candidatos= props => {
    const [candidato, setCandidato] = useState([]);
    const [animacao, setAnimacao] = useState('');
    const [deuMatch, setDeuMatch] = useState(false);

    useEffect(() => buscarCandidatos(), []);
   
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

            switch(animacao){
                case '':
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
                case "naoGostei":
                    setTimeout(() => window.location.reload(), 1000);
                    
                    return(
                        <>
                        <ContainerInfo className="animate__animated animate__bounceOutLeft">
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
                        
                        </>
                    )
                case "gostei":
                    setTimeout(() => window.location.reload(), 1000)
                    
                    return(
                        <>
                        <ContainerInfo className="animate__animated animate__bounceOutRight">
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
        
                        </>
                    )
                default:
                    return <h1>Ocoreu Um Erro!</h1>
            }
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
                console.log(response.data.isMatch);

                if(response.data.isMatch){
                    setDeuMatch(!deuMatch)
                };

                setAnimacao("gostei");
                buscarCandidatos()
            })
            .catch(error => console.log(error.response.data))
    };

    const naoGostei= () => {
        setAnimacao("naoGostei");
        buscarCandidatos()
    }
    
    
    return(
        <>
            <Header>
                <H3>AstroMatch</H3>
                <Buttom onClick={props.trocarTela}>Adicionados</Buttom>
            </Header>
            <hr/>
            <div>
                {candidato.length === 0? <Loading src={Carregando}/> : dadosDoCandidato()}
            </div>

            <DivButtom>
                <ImgBotas src={Botas} onClick={naoGostei}/>
                <ImgCoracao src={Heart} onClick={gostei}/>
            </DivButtom>
            {deuMatch? <PopUp/> : ""}
        </>
    )
};

export default Candidatos;