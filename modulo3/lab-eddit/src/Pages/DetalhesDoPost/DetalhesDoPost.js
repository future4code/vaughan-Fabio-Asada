import React, {useEffect, useState} from "react";
import {useProtecao} from "../useProtecao/useProtecao";
import { useParams } from "react-router-dom";
import axios from "axios";
import {Layout, Container, ContainerFooter, ContainerVotos, AdicionarPost, Setas, Excluir, FooterComentarios, Form, Textarea, Button, LoadingCont} from "./styled";
import SetaPreenchidaCima from "../../assets/setaPreenchidaCima.png"
import SetaPreenchidaBaixo from "../../assets/setaPreenchidaBaixo.png"
import SetaVaziaBaixo from "../../assets/setaVazadaBaixo.png"
import SetaVaziaCima from "../../assets/setaVazadaCima.png"
import useForms from "../hooks/useForms";
import Loading from "../../assets/carregando.gif";

const DetalhesDoPost= () => {
    const [posts, setPosts]= useState([]);
    const [comentarios, setComentarios]= useState([]);
    useProtecao();
    const parametros= useParams().id;
    useEffect(() => {buscarPosts()}, [])

    const {form, onChangeForm, clear}= useForms({body:""});

    const buscarPosts= () => {
        const url=`https://labeddit.herokuapp.com/posts`;
        const token=localStorage.getItem("token");

        const header={
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            }
        }

        axios
            .get(url, header)
            .then(response => {
                setPosts(response.data);
                buscarComentarios();
            })
            .catch(error => console.log(error.response.data))
    };
    
    const votosCima= (endPoint, userVote, id) => {
        const token=localStorage.getItem("token");
        const url=`https://labeddit.herokuapp.com/${endPoint}`;
        const body={"direction": 1};
    
        const header={
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            }
        };

        if(userVote === null){
            axios
                .post(url, body, header)
                .then(response => {
                    buscarPosts();
                })
                .catch(error => console.log(error.response.data))

        }else{
            excluirVoto(`posts/${id}/votes`);
            buscarPosts();
        }
    };

    const votosBaixo= (endPoint, userVote, id) => {
        const token=localStorage.getItem("token");
        const url=`https://labeddit.herokuapp.com/${endPoint}`;
        const body={"direction":-1};
        
        const header={
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            }
        }
        if(userVote === null){
            axios
                .put(url, body, header)
                .then(response => {
                    buscarPosts();
                })
                .catch(error => alert(error.response.data))

        }else{
            excluirVoto(`posts/${id}/votes`);
            buscarPosts();
        }
    };

    const excluirVoto= endPoint => {
        const url=`https://labeddit.herokuapp.com/${endPoint}`;
        const token=localStorage.getItem("token");

        const header={
            headers:{
                "Authorization":token
            }
        };

        axios
            .delete(url, header)
            .then(response => {
                buscarPosts();
            })
            .catch(error => alert(error.response.data))
    };

    const buscarComentarios= () => {
        const url= `https://labeddit.herokuapp.com/posts/${parametros}/comments`;

        const token=localStorage.getItem("token");

        const header={
            headers:{
                "Authorization":token
            }
        }

        axios
            .get(url, header)
            .then(response => setComentarios(response.data))
            .catch(error => console.log(error.response.data));
    }


    const excluirVotoComentario= id => {
        const url= `https://labeddit.herokuapp.com/comments/${id}/votes`;

        const token=localStorage.getItem("token");

        const header={
            headers:{
                "Authorization":token
            }
        }

        axios   
            .delete(url, header)
            .then(() => {
                buscarPosts();
            })
            .catch(error => console.log(error.response.data))
    }

    const votosNoComentarioCima= (userVote, id) => {
        const token=localStorage.getItem("token");
        
        const url=`https://labeddit.herokuapp.com/comments/${id}/votes`;

        const header={
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            }
        }

        const body={"direction": 1};

        if(userVote === null){
            axios
                .post(url, body, header)
                .then(() => {
                    buscarPosts();
                })
                .catch(error => console.log(error.response.data))
        }else{
            excluirVotoComentario(id);
            buscarPosts();
            
        }
    }

    const votosNoComentarioBaixo= (userVote, id )=> {
        const token=localStorage.getItem("token");
        
        const url=`https://labeddit.herokuapp.com/comments/${id}/votes`;

        const header={
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            }
        }

        const body={"direction": -1};

        if(userVote === null){
            axios
                .put(url, body, header)
                .then(() => {
                    buscarPosts();
                })
                .catch(error => console.log(error.response.data))
        }else{
            excluirVotoComentario(id);
            buscarPosts();
        }
    }
    
    const todosOsCometarios= () => {
        return comentarios.map(obj => {
            return(
                <Container>
                    <div>
                        <h3>{obj.username}</h3>
                    </div>

                    <div>
                        {obj.body}
                    </div>

                    <FooterComentarios>
                    
                    <Setas src={obj.userVote === 1 ? SetaPreenchidaCima: SetaVaziaCima} onClick={() => votosNoComentarioCima(obj.userVote,obj.id)}/>

                    {obj.voteSum? obj.voteSum :0 }

                    <Setas src={obj.userVote === -1 ? SetaPreenchidaBaixo :SetaVaziaBaixo} onClick={() => votosNoComentarioBaixo(obj.userVote, obj.id)}/>
                    
                    </FooterComentarios>
                </Container>
            )
        })
    };


    const criarComentario= id => {
        const token=localStorage.getItem("token");
        
        const url=`https://labeddit.herokuapp.com/posts/${id}/comments`;

        const header={
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            }
        }

        const body={"body": form.body};

        axios
            .post(url, body, header)
            .then(() => {
                alert("Comentário criado com sucesso!")
                clear();
                buscarPosts();
            })
            .catch(error => console.log(error.response.data))
    }


    const mostrarOsCometarios= comentarios.length? todosOsCometarios() : " ";
    const detalhes= posts.length? posts.filter(obj => obj.id === parametros): " ";
    
    const cardPost= () => {
        return (<Container>
                <h3>{detalhes[0].username}</h3>
                <p>{detalhes[0].body}</p>
                <ContainerFooter>
                    <ContainerVotos>
                        <p> 
                            <Setas src={detalhes[0].userVote === 1 ? SetaPreenchidaCima: SetaVaziaCima} onClick={() => votosCima(`posts/${detalhes[0].id}/votes`, detalhes[0].userVote, detalhes[0].id)}/> 
                            
                        </p>
                        
                        <p>{detalhes[0].voteSum? detalhes[0].voteSum: 0}</p> 
                        
                        <p> <Setas src={detalhes[0].userVote === -1 ? SetaPreenchidaBaixo :SetaVaziaBaixo} onClick={() => votosBaixo(`posts/${detalhes[0].id}/votes`, detalhes[0].userVote, detalhes[0].id)}/></p>

                    </ContainerVotos>
                    <div>
                        <p>{detalhes[0].commentCount?detalhes[0].commentCount:0} comentário</p>
                    </div>
                </ContainerFooter>
        </Container>)
    }

    return(
        <div>
            {
            posts.length ?
            <div>
                <Form onSubmit={event => event.preventDefault()}>
                    <Textarea
                    placeholder="Digite seu comentário"
                    required
                    name="body"
                    value={form.body}
                    onChange={onChangeForm}
                    ></Textarea>

                    <Button onClick={() => criarComentario(parametros)}>Adicionar</Button>
                </Form>
                {cardPost()}
                {mostrarOsCometarios}
            </div>: <LoadingCont><img src={Loading}/></LoadingCont>}

        </div>
    )
};

export default DetalhesDoPost;