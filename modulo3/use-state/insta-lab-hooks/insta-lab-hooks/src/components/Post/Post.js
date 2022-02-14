import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer, Li } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  const [iconeCurtida, setIconeCurtida ] = useState(iconeCoracaoBranco);
  const [numeroCurtidas, setNumeroCurtidas]= useState(0);
  const [numeroComentarios,setNumeroComentarios] = useState(0)
  const [mostrarInput, setMostrarInput] = useState(false);
  const [mostrarMensagens, setMostrarMensagens]= useState([]);
  const [mostrarLista, setMostrarLista] = useState(false);

  const onClickCurtida = () => {
    if(numeroCurtidas === 0){
      setNumeroCurtidas(numeroCurtidas + 1);
      setIconeCurtida(iconeCoracaoPreto);

    }else{
      setNumeroCurtidas(numeroCurtidas - 1);
      setIconeCurtida(iconeCoracaoBranco);
    }
  };

  const onClickComentario = () => {
    setMostrarInput(!mostrarInput);
    setMostrarLista(!mostrarLista);
  };

  const enviarComentario = comentario => {
    setMostrarMensagens([...mostrarMensagens, comentario]);
    setMostrarInput(!mostrarInput);
    setMostrarLista(true);

    setNumeroComentarios(numeroComentarios + 1);
  }

  const li= mostrarMensagens.map((item, index) => <Li key={index}>{item}</Li>);
  

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>

      {mostrarInput? <SecaoComentario enviarComentario={enviarComentario}/> : ''}
      
      <ul>
        {mostrarLista? li:""}
      </ul>

    </PostContainer>
  )
}

export default Post;