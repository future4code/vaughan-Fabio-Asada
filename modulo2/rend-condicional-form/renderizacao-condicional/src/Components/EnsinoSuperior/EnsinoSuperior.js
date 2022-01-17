import React from "react";
import styled from "styled-components";

const FormEnsinoSuperior= styled.form`
    width:700px;
    margin:auto;
    margin-top:20px;
    text-align:center;
`;

const Button= styled.button`
    width:150px;
    margin:auto;
    margin-top:35px;
    text-align:center;
`;

const FrasesVermelhas= styled.p`
    color:red;
`;

class EnsinoSuperior extends React.Component{
    state={
        nomeDoCurso:'',
        unidade:"",
        mostrar:false,
    }

    evitarDefault= event => {
        event.preventDefault();
    }

    curso= event => {
        this.setState({nomeDoCurso:event.target.value});
    }

    unidade= event => {
        this.setState({unidade:event.target.value});
    }

    alert= () => {
        if(!this.state.nomeDoCurso || !this.state.unidade){
            this.setState({mostrar:true});

            alert("Preencha todas as perguntas da ETAPA 2 antes de prosseguir!");

            return;
        }
        this.props.proximaEtapa();
    }

    render(){

        let area;
        let local;

        if(this.state.mostrar){
            area="Preencha seu curso";
            local="Preencha sua unidade de ensino";
        }

        return(
            <FormEnsinoSuperior onSubmit={this.evitarDefault}>

                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <p>1 - Qual curso?</p>
                <input value={this.state.nomeDoCurso} onChange={this.curso}/>
                <FrasesVermelhas>{area}</FrasesVermelhas>

                <p>2 - Qual a unidade de ensino?</p>
                <input value={this.state.unidade} onChange={this.unidade}/>
                <FrasesVermelhas>{local}</FrasesVermelhas>

                <br/>
                <Button onClick={this.alert}>Finalizar</Button>
                
            </FormEnsinoSuperior>
        )
    }
};

export default EnsinoSuperior;