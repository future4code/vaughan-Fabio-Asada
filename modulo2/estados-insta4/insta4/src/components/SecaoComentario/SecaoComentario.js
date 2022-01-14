import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
	
		this.onChangeComentario = this.onChangeComentario.bind(this);
		
	}

	onChangeComentario(event) {
		this.setState({
			value:event.target.value
		});
		console.log(this.state);
		
	}

	render() {
		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.value}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
	}
}
