import React from "react";

class PerguntaOpcoes extends React.Component{   
    valorSelect= event => {
        this.props.escolaridade(event.target.value);
    }

    render(){
        return( 
        <React.Fragment>

            <p>{this.props.pergunta}</p>

            <select name="select" onChange={e => this.valorSelect(e)}>

                <option value="Ensino médio incompleto">{this.props.opcoes[0]}</option>

                <option value="Ensino médio completo">{this.props.opcoes[1]}</option>

                <option value="Ensino superior incompleto">{this.props.opcoes[2]}</option>

                <option value="Ensino superior completo">{this.props.opcoes[3]}</option>
            </select>
        </React.Fragment>
        )
    }
};

export default PerguntaOpcoes;