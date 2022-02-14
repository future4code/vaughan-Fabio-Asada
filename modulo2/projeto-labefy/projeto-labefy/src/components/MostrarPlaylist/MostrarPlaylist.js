import axios from "axios";
import React from "react";

import Mais from "../../assets/mais.png"

import {Body, Container, MaisImg, Paragrafo, ParagrafoX, ContainerImgP, Carregando} from "./MostrarPlaylistEstilos"

class MostrarPlaylist extends React.Component{

    state={
        playlist:[],
    }

    buscarPlaylist= () => {
        const url="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        
        const header= { headers:{
            Authorization: "fabio-asada-vaughan"
        }}
        
        axios
        .get(url, header)
        .then(response => this.setState({playlist:response.data.result.list}))
        .catch(() => alert("Não foi possível mostrar a sua playlist"))
    }

    componentDidMount(){
        this.buscarPlaylist()
    }

    deletar= id =>{
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        const header={
            headers:{
                Authorization: "fabio-asada-vaughan"
            }
        }
        
        axios
            .delete(url, header)
            .then(() => {
                alert("Playlist deletada com sucesso.");
            
                this.buscarPlaylist();
            })
            .catch(() => alert("Erro ao deletar sua Playlist."))
    }

    render(){
        const playlistDoUsuario=this.state.playlist.map(obj => {
            return (
                <Container key={obj.id}>
                    
                    <ContainerImgP>

                        <MaisImg src={Mais} onClick={() => this.props.trocaTela("informacoes", obj.name, obj.id)}/>

                        <Paragrafo onClick={() => this.props.trocaTela("informacoes", obj.name, obj.id)}> {obj.name}</Paragrafo>

                    </ContainerImgP>


                    <ParagrafoX onClick={() => this.deletar(obj.id)}>X</ParagrafoX>

                </Container>)
        });

        return(
                <Body>
                    
                    {this.state.playlist.length? playlistDoUsuario: <Carregando>Carregando...</Carregando>}
                
                </Body>

            
        )
    }
};

export default MostrarPlaylist;