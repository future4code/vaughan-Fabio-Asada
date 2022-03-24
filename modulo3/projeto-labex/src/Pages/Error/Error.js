import React from "react";
import HeaderPage from "../Header/Header";
import FooterPage from "../Footer/Footer";
import Erro from "../../assets/error.jpeg";
import {Imagem} from "./ErrorEstilos";
import {EspacamentoErro} from "../Espacamento/Espacamento";

const ErrorPages= () => {

    return(
        <div>
            <HeaderPage links={["Voltar"]} caminhos={["/"]}/>
            <Imagem src={Erro}/>
            <EspacamentoErro/>
            <FooterPage/>
        </div>
    )
};

export default ErrorPages;