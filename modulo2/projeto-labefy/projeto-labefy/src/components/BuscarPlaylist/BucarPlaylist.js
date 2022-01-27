import React from "react";
import axios from "axios";

class BuscarPlaylist extends React.Component{
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
            .then(() => alert("Playlist criada com sucesso."))
            .catch(error => {
                const playlistJáExiste='There already is a playlist with a similiar name.';
                
                if(error.response.data.message === playlistJáExiste) return alert("Playlist com o mesmo nome já existe.");
                })
    }


    render(){

        
        return(
            <div>
                <input value={this.state.inputValue} onChange={this.onChangeInputValue} placeholder="Nome da Playlist..."/>
                <button onClick={this.createPlaylist}>Criar Playlist</button>
            </div>
        )
    }
};


export default BuscarPlaylist;