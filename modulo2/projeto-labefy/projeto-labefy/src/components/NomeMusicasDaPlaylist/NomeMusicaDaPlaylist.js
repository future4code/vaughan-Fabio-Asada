import React from "react";
import axios from "axios";
import { H3, Body, Input, Button, ContainerPlayer, ArtistaEMusica} from "./NomeMusicaDaPlaylistEstilos";


class NomeMusicaDaPlaylist extends React.Component{
    state={
        inputNomeDoArtista:"",
        inputNomeDaMusica:"",
        inputLink:"",
        artista:[],
    }

    onChangeNomeDaMusica= event => {
        this.setState({inputNomeDaMusica:event.target.value});
    }

    onChangeNomeDoArtista= event => {
        this.setState({inputNomeDoArtista:event.target.value});
    }

    onChangeLink= event => {
        this.setState({inputLink:event.target.value});
    }

    adicionarMusicas= () => {
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`;

        const header={
            headers:{
                Authorization: "fabio-asada-vaughan"
            }
        }

        const body={
            "name": this.state.inputNomeDaMusica, 
            "artist": this.state.inputNomeDoArtista,
            "url": this.state.inputLink
        }

        axios
            .post(url, body, header)
            .then(() => {
                alert("Adicionado com sucesso")
                this.setState({inputNomeDoArtista:"",
                inputNomeDaMusica:"",
                inputLink:"",});

            })
            .catch(() => alert("Não foi possível adiconar."))
    } 

    infoDoArtista= () => {
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`;

        const header={
            headers:{
                Authorization: "fabio-asada-vaughan"
            }
        }
        
        axios
            .get(url, header)
            .then(response => this.setState({artista:response.data.result.tracks }))
            .catch(() => alert("Não foi possível obter as músicas."))
    }

    componentDidMount(){
        this.infoDoArtista();
    }

    componentDidUpdate(){
        this.infoDoArtista();
    }

    render(){
        let playlist= this.state.artista.map(obj => {
            return( 
                <ContainerPlayer key={obj.id}>     
                
                    <ArtistaEMusica>

                        <h1>{obj.artist} </h1>
                        <h1> - {obj.name}</h1>

                    </ArtistaEMusica>

                    <audio controls>
                            <source 
                            src={obj.url} type="audio/mpeg"/>
                    </audio>
                </ContainerPlayer>
            )
        })
        return(
            <Body>
                <H3>Playlist de {this.props.info.toUpperCase()}</H3>

                <Input onChange={this.onChangeNomeDaMusica} value={this.state.inputNomeDaMusica} placeholder="Nome da Música"/>

                <Input onChange={this.onChangeNomeDoArtista} value={this.state.inputNomeDoArtista}  placeholder="Nome do Artista"/>

                <Input onChange={this.onChangeLink} value={this.state.inputLink}  placeholder="Link"/>

                <Button onClick={this.adicionarMusicas}>Adicionar</Button>

                {playlist}
            </Body>
        )
    }
};


export default NomeMusicaDaPlaylist;

