import React from "react";
import styled from "styled-components";

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

const FraseVermelha= styled.p`
    color:red;
`;

class SemFaculdade extends React.Component{
    state= {
        ensinoMedio:"",
        mostrar:false,
    }
    
    evitarDefault= event => {
        event.preventDefault();
    }

    ensinoMedio= e => {
        this.setState({ensinoMedio:e.target.value});
    }

    alert= () => {
        if(!this.state.ensinoMedio){
            this.setState({mostrar:true});
            
            alert("Preencha todas as perguntas da ETAPA 3 antes de prosseguir!")

            return;
        };

        this.props.finalizando();
    }

    render(){

        let incompleto;

        if(this.state.mostrar){
            incompleto= "Preencha o motivo de não ter terminado o ensino superior";
        }

        return(
            <FormDadosGerais onSubmit={this.evitarDefault}>
                
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <p>1 - Por que você não terminou um curso de graduação?</p>
                <input value={this.state.ensinoMedio} onChange={this.ensinoMedio}/>
                <FraseVermelha>{incompleto}</FraseVermelha>

                <p>2 - Você fez algum curso complementar?</p>

                <select name="select">
                    <option value="valor1">Curso técnico</option>
                    <option value="valor2">Cursos de inglês</option>
                    <option value="valor3">Não fiz curso complementar</option>
                </select>
                <br/>

                <Button onClick={this.alert}>Finalizar</Button>

            </FormDadosGerais>
        )
    }
};

export default SemFaculdade;