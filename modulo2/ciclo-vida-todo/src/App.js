import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

const ContainerDoX= styled.div`
  display:flex;
  justify-content:space-between;
  aligin-itens:center;
  width:600px;
`;

const Pararafoh5= styled.h1`
  color:red;
  margin-top:-10px;
  cursor:pointer;
`;

const Button= styled.button`
  color:white;
  background-color:green;
  width:fit-content;
  height:30px;
`;

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: "",
    }

  componentDidUpdate() {
    localStorage.setItem("atividades", `${JSON.stringify(this.state.tarefas)}`)
  };

  componentDidMount() {
    const inicializar= JSON.parse(localStorage.getItem("atividades"));

    this.setState({tarefas:inicializar});
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value});
  }

  onChangeInput2 = (event) => {
    this.setState({inputValue2: event.target.value});
  }

  criaTarefa = () => {
    const novaTarefa= {
      id:Date.now(),
      texto: this.state.inputValue,
      completa:false,
    };

    const copiaDoEstado= [...this.state.tarefas, novaTarefa]; 
    this.setState({tarefas: copiaDoEstado});
  }

  selectTarefa = id => {

    const itemModificado= this.state.tarefas.map(obj => {
      if(obj.id === id){
        return {...obj, completa: !this.state.completa};
      }

      return obj;
    });
    this.setState({tarefas:itemModificado});
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})

  }

  sumir= id => {
    const listaFiltrada= this.state.tarefas.filter(item => {
          if(item.id !== id){
            return true;
          }
        
          return false;
    });

    this.setState({tarefas:listaFiltrada});
  }

  editarTexto = (id, index) => {
    
    const mensagemParaEditar=this.state.tarefas[index].texto;
    console.log(mensagemParaEditar)
    const mensagemEditada= prompt("Edite sua mensagem.", `${mensagemParaEditar}`);

    const textoEditado= this.state.tarefas.map(item => {
      if(item.id === id){
        return {...item, texto:mensagemEditada};
      }
    
      return item;
    });

    this.setState({tarefas:textoEditado});

  }

  render() {
    

    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>

        <TarefaList>
          {listaFiltrada.map((tarefa, index) => {
            return (
            <ContainerDoX>
                    
                    <Tarefa
                      completa={tarefa.completa}
                      onClick={() => this.selectTarefa(tarefa.id)}
                    >
                    {tarefa.texto} 
                  
                    </Tarefa>

                    <Button onClick={() => this.editarTexto(tarefa.id, index)}>Editar Texto</Button>
                    <Pararafoh5 onClick={() => this.sumir(tarefa.id)}>X</Pararafoh5>

              </ContainerDoX>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
