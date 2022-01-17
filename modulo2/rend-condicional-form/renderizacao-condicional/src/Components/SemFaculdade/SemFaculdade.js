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

class SemFaculdade extends React.Component{
    evitarDefault= event => {
        event.preventDefault();
    }

    render(){

        return(
            <FormDadosGerais onSubmit={this.evitarDefault}>
                
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <p>1 - Por que você não terminou um curso de graduação?</p>
                <input/>

                <p>2 - Você fez algum curso complementar?</p>

                <select name="select">
                    <option value="valor1">Nenhum</option>
                    <option value="valor2">Curso técnico</option>
                    <option value="valor3">Cursos de inglês</option>
                    <option value="valor4">Não fiz curso complementar</option>
                </select>
                <br/>

                <Button onClick={this.props.finalizando}>Próxima etapa</Button>

            </FormDadosGerais>
        )
    }
};

export default SemFaculdade;