import React from "react";
import * as Layout from "./UsuarioEstilos";
import check from "../../Imagem/doublecheck.svg";
import checkEsquerda from "../../Imagem/doublecheckEsquerda.png";

const {
    Template, 
    NomeDoUsuario, 
    DivForm,
    InputNome, 
    InputMensagem,
    Button,
    CardNomeMensagem,
    CardNomeMensagemEu,
    DoisCheck,
    DoisCheckEsquerda
} = Layout;

class Usuario extends React.Component{
    state={
        nome:"",
        mensagem:"",
        juntarInformacoes: [], 
    }
    

    onChangeUsuario= event => {
        this.setState({nome:event.target.value });
    }

    onChangeMensagem= event => {
        this.setState({ mensagem:event.target.value});
    }

    onClickButton= event => {
        this.setState({
            juntarInformacoes:[...this.state.juntarInformacoes, {nome:this.state.nome,  mensagem:this.state.mensagem}]
        })

        this.setState({nome:"", mensagem:""});
    }

    formulario= event => {
        event.preventDefault();
    }

    sumirPost= (novoNome, indexCapturado) => {
        const novaRenderizacao= this.state.juntarInformacoes.map((item, index) => {
            if(index === indexCapturado) {
                return {nome:novoNome,  mensagem:`Mensagem Apagada`}
            }

            return item;
        });


        if(window.confirm("Tem certeza que deseja deletar essa mensagem?")){

            this.setState({juntarInformacoes:novaRenderizacao});
        }
    }

    render(){
        const mostrarNatela= this.state.juntarInformacoes.map((item, index) => {
            
            if(item.nome === 'eu'){
                
                return <CardNomeMensagemEu key={index} onDoubleClick ={() => this.sumirPost(item.nome,index)}>

                        <p>{item.mensagem}</p>
                        <DoisCheck src={check}/>

                </CardNomeMensagemEu>
            }

            return <CardNomeMensagem key={index} onDoubleClick ={() => this.sumirPost(item.nome,index)}>
                
                <p><NomeDoUsuario>{item.nome}</NomeDoUsuario> <br/>{item.mensagem} </p>
                <DoisCheckEsquerda src={checkEsquerda}/>
                
            </CardNomeMensagem>
        })
        
        return(
            <React.Fragment>
                <Template>
                        {mostrarNatela}
                        
                    <DivForm onSubmit={this.formulario}>

                        <InputNome value={this.state.nome} placeholder=" Usuário" onChange={this.onChangeUsuario}/>

                        <InputMensagem value={this.state.mensagem} placeholder=" Mensagem" onChange={this.onChangeMensagem}/>

                        <Button onClick={this.onClickButton}>Enviar</Button>

                    </DivForm>

                    
                </Template>
            </React.Fragment>
        )
    }
};

export default Usuario;