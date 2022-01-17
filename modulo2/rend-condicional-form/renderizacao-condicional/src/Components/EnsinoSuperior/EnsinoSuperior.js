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

class EnsinoSuperior extends React.Component{
    evitarDefault= event => {
        event.preventDefault();
    }

    render(){
        return(
            <FormEnsinoSuperior onSubmit={this.evitarDefault}>

                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <p>1 - Qual curso?</p>
                <input/>

                <p>2 - Qual a unidade de ensino?</p>
                <input/>
                <br/>
                <Button onClick={this.props.proximaEtapa}>Próxima etapa</Button>
                
            </FormEnsinoSuperior>
        )
    }
};

export default EnsinoSuperior;