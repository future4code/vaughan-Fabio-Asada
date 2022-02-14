import React from "react";
import axios from "axios";
import {Body, Imagem, Input, Container, Button} from "./CriarPlaylistEstilos";
import Pessoas from "../../assets/ouvindo_musica.png";

class CriarPlaylist extends React.Component{
    state={
        inputValue:""
    }

    onChangeInputValue= event => {
        this.setState({inputValue:event.target.value})
    }

    createPlaylist= () => {
        const url= `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`;

        const body= {"name": this.state.inputValue };

        const header= { headers: { Authorization: "fabio-asada-vaughan" }}

        axios
            .post(url, body, header)
            .then(() => {
                alert("Playlist criada com sucesso.")
            
                this.setState({inputValue:""})
            })
            .catch(error => {
                const playlistJáExiste='There already is a playlist with a similiar name.';
                
                if(error.response.data.message === playlistJáExiste) return alert("Playlist com o mesmo nome já existe.");
                })
    }


    render(){

        
        return(

            <Body>

                <Container>

                    <Input value={this.state.inputValue} onChange={this.onChangeInputValue} placeholder="Nome da Playlist..."/>
                    <Button onClick={this.createPlaylist}>Criar Playlist</Button>

                </Container>

                <Imagem src={Pessoas}/>
            </Body>
        )
    }
};


export default CriarPlaylist;