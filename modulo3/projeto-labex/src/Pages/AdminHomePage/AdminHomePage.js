import React, {useState} from "react";
import HeaderPage from "../Header/Header";
import FooterPage from "../Footer/Footer";
import {Link, useNavigate} from "react-router-dom";
import {ContainerViagens, DivImg, LoadingImg, LixeiraImg, Container, H1, ContViagensParagrafo, ContViagensBotoes, Botao, ImgFoguetePB} from "./AdminHomePageEstilos";
import {useProtecao} from "../ProtecaoDeRotas/ProtecaoDeRotas";
import {Espacamento} from "../Espacamento/Espacamento";
import Foguete from "../../assets/loading.gif";
import Lixeira from "../../assets/lixeira.png";
import FoguetePB from "../../assets/foguetePB.png";
import axios from "axios";
import {EspacamentoHeader} from "../Espacamento/Espacamento";

const AdminHomePage= () => {
    useProtecao();
    const navigate= useNavigate();
    const [viagensEspaciais, setViagensEspaciais]= useState([]);

    const atualizar= () => {
        const url="https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio/trips";
        
            axios
                .get(url)
                .then(response => { 
                    setViagensEspaciais(response.data.trips);
                    
                    const dadosDaViagem= JSON.stringify(response.data.trips);
                    localStorage.setItem("viagem", dadosDaViagem);
                })
                .catch(error => console.log(error.response))
        
    };
    atualizar();
    
    const mostrarDetalhes= id => {
        navigate(`/admin/trips/${id}`)
    };

    const deletarViagem= (idViagem, nomeDaViagem) => {
        const token=localStorage.getItem("token");
        
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio/trips/${idViagem}`;

        const header={
            headers:{
                "Content-Type":"application/json",
                "auth":token
            }
        };

        if(window.confirm(`Tem certeza que deseja deletar a viagem "${nomeDaViagem}"?`)){
            axios
                .delete(url, header)
                .then(response => {
                        alert("Viagem deletada com sucesso!");
                        atualizar();
                    }
                )
                .catch(error => alert("Ocorreu um erro ao tentar deletar sua viagem!"));
        }
    };

    const mostrarViagem= () => {
        return( 
            <Container>
                <H1>Dashboard</H1>
                {viagensEspaciais.map((obj, index) => {
                return( 
                    <ContainerViagens key={index}>
                        
                        <ContViagensParagrafo>
                            <ImgFoguetePB src={FoguetePB}/>
                            {obj.name}
                        </ContViagensParagrafo>

                        <ContViagensBotoes>
                            
                            <p onClick={() => deletarViagem(obj.id, obj.name)}><LixeiraImg src={Lixeira}/></p> 

                            <Botao onClick={() => mostrarDetalhes(obj.id)}>Acessar</Botao>

                        </ContViagensBotoes>
                    </ContainerViagens>
                    
                )})}
            </Container>
        )
    } 
            
    return(
        <div>
            <HeaderPage links={["Voltar", "Criar Viagem","Logout"]} caminhos={["/", "/admin/trips/create","/login"]}/>
            <EspacamentoHeader/>
            
            {viagensEspaciais.length? mostrarViagem() : <DivImg><LoadingImg src={Foguete}/></DivImg>}
            
            <Espacamento/>
            <FooterPage/>
        </div>
    )
};

export default AdminHomePage;