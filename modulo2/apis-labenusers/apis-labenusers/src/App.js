import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component{
  state={
    inputValueNome:"",
    inputValueEmail:"",
    mostrarNomes:[],
    mudarTela:false,
    telaUsuario:false,
    nomeEmail:[],
  }

  onChangeNome= e => {
    this.setState({inputValueNome:e.target.value})
  }

  onChangeEmail= e => {
    this.setState({inputValueEmail:e.target.value})
  }

  criarUsuario = () => {
    const url= "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body= {
      "name": `${this.state.inputValueNome}`,
      "email": `${this.state.inputValueEmail}`,
    }

    const header= {headers:{
      Authorization: "fabio-asada-vaughan"
    }}
    
    axios
      .post(url, body, header)
      .then(response => alert("Usuário Criado com sucesso"))
      .catch(error =>{ 
        console.log(error.response.data)
      alert("Ocorreu um erro ao criar Usuário.")})
  }

  pegarUsuario= () => {
    const url="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const header= {headers:{
      Authorization: "fabio-asada-vaughan"
    }};

    axios
      .get(url, header)
      .then(response => this.setState({mostrarNomes:response.data}))
      .catch(() => {
        alert("Erro ao obter os dados")
      })
  }

  excluir= id => {

    const url=`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

    const header= {headers:{
      Authorization: "fabio-asada-vaughan"
    }};

    if(window.confirm("Tem ceretza que deseja apagar?")){

      axios
        .delete(url, header)
        .then(response => {
          this.pegarUsuario()
          this.setState({inputValueNome:""})
          this.setState({inputValueEmail:""})
          alert("Usuário apagado com sucesso.")
        })
        .catch(error => {
          alert("Não foi possível apagar o Usuário.")
        })
    }
  }

  mudarATela= () => {
    this.setState({mudarTela:!this.state.mudarTela})
    this.setState({telaUsuario:false})

    this.pegarUsuario();
  }

  infoDoUsuario= id => {
    
    this.setState({telaUsuario: !this.state.telaUsuario})

    const url=`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

    const header= {headers:{
      Authorization: "fabio-asada-vaughan"
    }};

    axios
        .get(url, header)
        .then(response => {
          
          this.setState({nomeEmail:[ {nome:response.data.name}, {email:response.data.email}, {id:response.data.id}]})
          
        })
        .catch(error => {
          console.log(error.response.data)
        })
    
    
    
  }

  render(){
    console.log(this.state)
    let nome;
    
      if(!this.state.mudarTela){

        nome= (<div className="App">

        <input onChange={this.onChangeNome} value={this.state.inputValueNome} placeholder='Nome'/>

        <input onChange={this.onChangeEmail} value={this.state.inputValueEmail} placeholder='E-mail'/>

        <button onClick={this.criarUsuario}>Criar Usuário</button>

      </div>)
        
      }else{
        nome=this.state.mostrarNomes.map(obj => {
          return(
            <div className='nomesNaTela'>
              <p onClick={() => this.infoDoUsuario(obj.id)}>{obj.name}</p>
              <button className='botaoExcluir'
               onClick={() => this.excluir(obj.id)}>excluir</button>
            </div>
          )
        })
      }
      
      if(this.state.telaUsuario){
        nome=<div>
          {this.state.nomeEmail.map(obj => {
          return(<div>
            <p>{obj.nome}</p>
            <p>{obj.email}</p>
          </div>)
        })}
        <button onClick={() => this.excluir()}>Excluir</button>
        
        </div> 
      }


    return (
      <>
      {/* Mudar de tela */}
       <div>
        <button onClick={this.mudarATela}>Mudar de Tela</button>
      </div>
      

      {/* Tela Usuários */}
          
          {nome}
      </>
    );
  }
}

export default App;
