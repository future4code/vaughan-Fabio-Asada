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
    edicao:false,
    inputNomeEditar:"",
    inputEmailEditar:"",
    procurarUsuario:"",
    usuarioBuscadoPorNome:"",
    mostrarNomeBuscado:false,
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
      this.setState({inputValueNome:""})
      this.setState({inputValueEmail:""})
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
          this.setState({nomeEmail:[]})
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
          
          this.setState({nomeEmail:[ {
            nome:response.data.name,
            email:response.data.email,
            id:response.data.id
          }]})
          
        })
        .catch(error => {
          console.log(error.response.data)
        })
  }


  infoDoUsuarioEditado= id => {

    const url=`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

    const header= {headers:{
      Authorization: "fabio-asada-vaughan"
    }};

    axios
        .get(url, header)
        .then(response => {
          
          this.setState({nomeEmail:[ {
            nome:response.data.name,
            email:response.data.email,
            id:response.data.id
          }]})
          
        })
        .catch(error => {
          console.log(error.response.data)
        })
  }

  onClickEdicao= () => {
    this.setState({edicao:!this.state.edicao})
  }

  editarNome= e => {
    this.setState({inputNomeEditar: e.target.value})
  }

  editarEmail= e => {
    this.setState({inputEmailEditar: e.target.value})
  }


  editarUsuario= id => {
    const url= `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

    const header= {headers:{
      Authorization: "fabio-asada-vaughan"
    }};

    const body= {
      "name": `${this.state.inputNomeEditar}`,
      "email": `${this.state.inputEmailEditar}`,
    }
    
    axios
      .put(url, body ,header)
      .then(response => {
        alert("Edição feita com sucesso!")
      })
      .catch(error => {
        alert("Não foi possível editar.")
      })

      this.setState({inputNomeEditar:""})
      this.setState({inputEmailEditar:""})
      this.setState({edicao:!this.state.edicao})

      this.infoDoUsuarioEditado(id);
  }

  componentDidUpdate(){
    this.pegarUsuario();
  }

  onChangeProcurarUsuario= e => {
    this.setState({procurarUsuario:e.target.value});

  }

  varrerLista= () => {
    
    const url=`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.procurarUsuario}`;

    const header= {headers:{
      Authorization: "fabio-asada-vaughan"
    }};
    
    axios
      .get(url, header)
      .then(response => {
        this.setState({usuarioBuscadoPorNome:response.data[0].name})

        this.setState({mostrarNomeBuscado:!this.state.mostrarNomeBuscado})
      })
      .catch(error => alert("Usuário não encontrado"));
  }

  render(){
    let nome;
    
      if(!this.state.mudarTela){

        nome= (<div className="App">

        <input onChange={this.onChangeNome} value={this.state.inputValueNome} placeholder='Nome'/>

        <input onChange={this.onChangeEmail} value={this.state.inputValueEmail} placeholder='E-mail'/>

        <button onClick={this.criarUsuario}>Criar Usuário</button>

      </div>)
        
      }else{
        nome=(<div>
        {!this.state.mostrarNomeBuscado? this.state.mostrarNomes.map(obj => {
          return(
            <div className='nomesNaTela'>
              <p onClick={() => this.infoDoUsuario(obj.id)}>{obj.name}</p>
              <button className='botaoExcluir'
              onClick={() => this.excluir(obj.id)}>excluir</button>
            </div>
          )
        }):<div>
          
          {this.state.mostrarNomes.map(obj => {

            if(obj.name === this.state.usuarioBuscadoPorNome){

              return(
                  <div className='nomesNaTela'>
                    <p onClick={() => this. infoDoUsuario(obj.id)}>{obj.name}</p>
                    <button   className='botaoExcluir'
                    onClick={() => this.excluir (obj.id)}>excluir</button>
                  </div>
                    )
            }else{
              return '';
            }
                })}

            </div>
          }

          <div>
            <h3>Procurar Usuário</h3>
            <input value={this.state.procurarUsuario} placeholder='Nome exato para busca' onChange={this.onChangeProcurarUsuario}/>

            <button onClick={this.varrerLista}>Salvar edição</button>
          </div>

        </div>)
      }
      
      if(this.state.telaUsuario){
        nome=<div>
          {this.state.nomeEmail.map(obj => {
          return(<div>
            <p>{obj.nome}</p>

            <p>{obj.email}</p>

            {this.state.edicao? <div>
              <input value={this.state.inputNomeEditar} placeholder='Nome' onChange={this.editarNome}/>

              <input value={this.state.inputEmailEditar}  placeholder='Email' onChange={this.editarEmail}/>

              <button onClick={() => this.editarUsuario(obj.id)}>Salvar Edição</button>

              </div>: <button onClick={this.onClickEdicao}>Edição</button>}

            <button onClick={() => this.excluir(obj.id)}>Excluir</button>
            <button onClick={() => this.setState({telaUsuario:!this.state.telaUsuario})}>Voltar</button>
          </div>)
        })}
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
