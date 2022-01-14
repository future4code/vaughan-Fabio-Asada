import React from "react";
import * as Layout from "./UsuarioEstilos";

const {Template} = Layout;

class Usuario extends React.Component{
    state=
        {
        nome:"",
        mensagem:"",
        juntarInformacoes: [], 
        
        }
    

    onChangeUsuario= event => {
        this.setState({
            ...this.state, 
            nome:event.target.value
        });
    }

    onChangeMensagem= event => {
        this.setState({
            ...this.state, 
            mensagem:event.target.value
        });
    }

    onClickButton= () => {
        this.setState({
            juntarInformacoes:[...this.state.juntarInformacoes, {nome:this.state.nome,  mensagem:this.state.mensagem}]
        })
    }
    
    render(){

        const mostrarNatela= this.state.juntarInformacoes.map(item => {
            console.log(item)
            return <p>{item.nome}: {item.mensagem}</p>
        })
        
        return(
            <React.Fragment>
                <Template>
                    {mostrarNatela}

                    <div>
                        <input value={this.state.nome} placeholder="Usuário" onChange={this.onChangeUsuario}/>
                        <input placeholder="Mensagem" onChange={this.onChangeMensagem}/>
                        <button onClick={this.onClickButton}>Enviar</button>

                    </div>

                    
                </Template>
            </React.Fragment>
        )
    }
};

export default Usuario;