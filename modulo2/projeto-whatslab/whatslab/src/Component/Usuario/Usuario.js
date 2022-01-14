import React from "react";
import * as Layout from "./UsuarioEstilos";

const {
    Template, 
    NomeDoUsuario, 
    DivForm,
    InputNome, 
    InputMensagem,
    Button,
    CardNomeMensagem
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

    sumirPost= indexCapturado => {
        const novaRenderizacao= this.state.juntarInformacoes.filter((_, index) => index !== indexCapturado);

        this.setState({juntarInformacoes:novaRenderizacao});
    }

    render(){
        const mostrarNatela= this.state.juntarInformacoes.map((item, index) => {
            
            return <CardNomeMensagem key={index} onDoubleClick ={() => this.sumirPost(index)}>
                
                <p><NomeDoUsuario>{item.nome}</NomeDoUsuario>: {item.mensagem}</p>
            
            </CardNomeMensagem>
        })
        
        return(
            <React.Fragment>
                <Template>
                        {mostrarNatela}
                    
                    <DivForm onSubmit={this.formulario}>

                        <InputNome value={this.state.nome} placeholder="Usuário" onChange={this.onChangeUsuario}/>

                        <InputMensagem value={this.state.mensagem} placeholder="Mensagem" onChange={this.onChangeMensagem}/>

                        <Button onClick={this.onClickButton}>Enviar</Button>

                    </DivForm>

                    
                </Template>
            </React.Fragment>
        )
    }
};

export default Usuario;