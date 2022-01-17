import React from "react";
import styled from "styled-components";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaOpcoes from "./PerguntaOpcoes";

const FormDadosGerais= styled.form`
    width:700px;
    margin:auto;
    margin-top:20px;
    text-align:center;
`;

const Button= styled.button`
    width:150px;
    margin:auto;
    margin-top:50px;
    text-align:center;
`;

class DadosGerais extends React.Component{
    evitarDefault= event => {
        event.preventDefault();
    }

    render(){

        return(
            <FormDadosGerais onSubmit={this.evitarDefault}>

                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <PerguntaAberta pergunta={"1 - Qual o seu nome?"}/>
                <input/>

                <PerguntaAberta pergunta={"2 - Qual sua idade?"}/>
                <input/>

                <PerguntaAberta pergunta={"3 - Qual seu email?"}/>
                <input/>

                <PerguntaOpcoes pergunta={"4 - Qual a sua escolaridade?"} opcoes={[
                    "Ensino médio incompleto",
                    "Ensino médio completo",
                    "Ensino superior incompleto",
                    "Ensino superior completo"
                ]} escolaridade={this.props.escolaridade}/>
                
                <br/>

                <Button onClick={this.props.proximaEtapa}>Próxima etapa</Button>

            </FormDadosGerais>
        )
    }
};

export default DadosGerais;