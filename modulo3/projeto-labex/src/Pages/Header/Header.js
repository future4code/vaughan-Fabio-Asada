import React from "react";
import {Header, Imagem, Nome, AreaViagensOuAdmin, Ul ,Li} from "./HeaderEstilos";
import "./HeaderEstilos.css";
import Foguete from "../../assets/fogueteTratado.png";

import {Link} from "react-router-dom";

const HeaderPage= props => {

    const links=props.links.map((item, index) => <Link className="estiloDosLinks" to={props.caminhos[index]} key={index}><Li>{item}</Li></Link>);

    return(
        
            <Header>

                <div><Imagem src={Foguete}/> <Nome>LabeX</Nome></div> 
                    <AreaViagensOuAdmin>
                        <Ul>{links}</Ul>
                    </AreaViagensOuAdmin> 

            </Header>

        
    )
};

export default HeaderPage;