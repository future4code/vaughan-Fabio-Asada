import React from 'react';
import styled from 'styled-components'
// import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Card= styled.div`
  width:300px;
  height:300px;
  margin:10px;
  border:1px solid grey;
  margin-top:100px;
  border-radius:6px;
`;

const MiniCard= styled.div`
  display: flex;
  align-items: center;
  padding:10px;
`

const Perfil= styled.img`
  border-radius:50px;
  margin:10px;
`;

const Foto= styled.img`
  width:100%;
  height:100%;
  border-radius:6px;
`;

const CardInput= styled.div`
  width:300px;
  height:350px;
  margin:10px;
  border:1px solid grey;
  margin-top:20px;
  border-radius:6px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

`;

const Input= styled.input`
  margin-bottom:20px;
`;


const Button= styled.button`
  margin-top:20px;
  color:white;
  background-color:green;
  border:none;
  padding: 10px 20px;
  border-radius:5px;
  cursor: pointer;
`;

const H2= styled.h2`
  color:#DA5F6B;
`;

class App extends React.Component {
  state={

    pessoa: [
    {
      nomeUsuario: "Paulinha",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/200/150",
   
    },
    {
      nomeUsuario: "André",
      fotoUsuario: "https://picsum.photos/45/45",
      fotoPost: 'https://picsum.photos/150/150',
  
    },
    {
      nomeUsuario: "Leia",
      fotoUsuario: "https://picsum.photos/48/48",
      fotoPost: 'https://picsum.photos/180/180',
    }],
    
    nomeInput:"",
    perfil:"",
    paisagem:"",
    
  }

  onChangeNome= event => {
    this.setState({nomeInput:event.target.value})
  } 
  onChangePerfil= event => {
    this.setState({perfil:event.target.value})
  } 
  onChangeImagem= event => {
    this.setState({paisagem:event.target.value})
  } 

  adicionaPost= () => {
    const novaPessoa= {
      nomeUsuario: this.state.nomeInput,
      fotoUsuario: this.state.perfil,
      fotoPost: this.state.paisagem,
    }

    const newPessoa= [...this.state.pessoa, novaPessoa];

    this.setState({pessoa:newPessoa});
    this.setState({
      nomeInput:"",
      perfil:"",
      paisagem:"",
    })
  }

  render() {

    let mostrarUsuario= this.state.pessoa.map((item, index) => {

      return(
          <Card key={index}>
  
            <MiniCard>
              <Perfil src={item.fotoUsuario}/>
              <p>{item.nomeUsuario}</p>
            </MiniCard>
            
            <Foto src={item.fotoPost}/>
  
          </Card>
        )
    })

    return (

      <MainContainer>

          <CardInput>
          <H2>Informações</H2>

          <Input  value={this.state.nomeInput} placeholder='Nome' onChange={this.onChangeNome}/>

          <Input value={this.state.perfil}  onChange={this.onChangePerfil} placeholder='Link do Perfil'/>

          <Input  value={this.state.paisagem} onChange={this.onChangeImagem} placeholder='Link da Imagem'/>

          <Button onClick={this.adicionaPost}>Adicionar</Button>

          </CardInput>

          {mostrarUsuario}


        {/* <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        /> */}
      </MainContainer>
    );
  }
}

export default App;
