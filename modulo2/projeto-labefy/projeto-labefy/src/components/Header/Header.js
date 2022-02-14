import React from "react";
import { HeaderEstilos, H1, H3 } from "./HeaderEstilos";

class Header extends React.Component{
    render(){
        return(
           
                <HeaderEstilos>
                    <H1>Labefy</H1>
                    <H3 onClick={() => this.props.trocaTela("criar")}>Criar Playlist</H3>
                    <H3 onClick={() => this.props.trocaTela("ver")}>Ver Playlist</H3>
                </HeaderEstilos>
            
        )
    }
};

export default Header;