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

const FrasesVermelhas= styled.p`
    color:red;
`;

class DadosGerais extends React.Component{
    state={
        inputNome:"",
        inputIdade:'',
        inputEmail:"",
        mostrar:false,
    }

    evitarDefault= event => {
        event.preventDefault();
    }

    onChangeNome= e => {   
        this.setState({inputNome:e.target.value}) 
    }
    onChangeIdade= e => {     
        this.setState({inputIdade:e.target.value}) 
    }
    onChangeEmail= e => {     
        this.setState({inputEmail:e.target.value})
    }

    alert= () => {
        
        if(!this.state.inputNome.length || !this.state.inputIdade.length || !this.state.inputEmail.length){
            this.setState({mostrar:true});

            alert("Preencha todas as perguntas da ETAPA 1 antes de prosseguir!")
            
            return;
        };

        this.props.proximaEtapa();
    }


    render(){

        let preenchaNome;
        let preenchaIdade;
        let preenchaEmail;


        if(this.state.mostrar){
            preenchaNome= "Preencha seu nome";
            preenchaIdade= "Preencha sua idade";
            preenchaEmail= "Preencha seu email";
        }

        return(
            <FormDadosGerais onSubmit={this.evitarDefault}>

                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <PerguntaAberta pergunta={"1 - Qual o seu nome?"}/>
                <input value={this.state.inputNome} onChange={this.onChangeNome}/>
                <FrasesVermelhas>{preenchaNome}</FrasesVermelhas>

                <PerguntaAberta pergunta={"2 - Qual sua idade?"}/>
                <input value={this.state.inputIdade} onChange={this.onChangeIdade}/>
                <FrasesVermelhas>{preenchaIdade}</FrasesVermelhas>

                <PerguntaAberta pergunta={"3 - Qual seu email?"}/>
                <input value={this.state.inputEmail} onChange={this.onChangeEmail}/>
                <FrasesVermelhas>{preenchaEmail}</FrasesVermelhas>

                <PerguntaOpcoes pergunta={"4 - Qual a sua escolaridade?"} opcoes={[
                    "Ensino médio incompleto",
                    "Ensino médio completo",
                    "Ensino superior incompleto",
                    "Ensino superior completo"
                ]} escolaridade={this.props.escolaridade}/>
                
                <br/>

                <Button onClick={this.alert}>Continuar</Button>

            </FormDadosGerais>
        )
    }
};

export default DadosGerais;