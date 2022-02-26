import React, { useEffect, useState } from "react";
import {useProtecao} from "../useProtecao/useProtecao";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {Layout, Container,ContainerFooter, ContainerVotos, AdicionarPost, Setas, LoadingCont, LayoutContainer, Input, BuscarAutor, Lupa} from "./styled";
import "./style.css";
import SetaPreenchidaCima from "../../assets/setaPreenchidaCima.png"
import SetaPreenchidaBaixo from "../../assets/setaPreenchidaBaixo.png"
import Busca from "../../assets/search.png"
import Loading from "../../assets/carregando.gif";
import useForms from "../hooks/useForms";

const ListaDePosts= () => {
    useProtecao();
    const navigate= useNavigate();
    const [posts, setPosts]= useState([]);
    useEffect(() => buscarPosts(), [])
    const {form, onChangeForm, clear}= useForms({inputBusca:""});


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
                const listaDePosts= JSON.stringify(response.data);
                localStorage.setItem("posts", listaDePosts);
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
                .catch(error => alert(error))

        }else{
            if(window.confirm("Deseja mudar o seu voto?")){
                excluirVoto(`posts/${id}/votes`);
                alert("Voto retirado. Pode votar novamente.");
            }
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
            if(window.confirm("Deseja mudar o seu voto?")){
                excluirVoto(`posts/${id}/votes`);
                alert("Voto retirado. Pode votar novamente.");
            }
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

    const detalhesDoPost= id => {
        navigate(`/post/${id}`);
    } 

    const mostrarPosts= posts.length? posts
        .filter(({username}) => {
            const autorDoPost=username.toLowerCase();
            const buscaDoUsuario=form.inputBusca.toLowerCase();

            if(autorDoPost.includes(buscaDoUsuario)){

                return true; 
            };

            return false;
        })
        .map(({username, body, voteSum, userVote,commentCount,id}) => {

        return(
            <Container >
                <div onClick={() => detalhesDoPost(id)}>
                    <h3>{username}</h3>
                    <p>{body}</p>

                </div>
                <ContainerFooter>
                    <ContainerVotos>
                        <p> 
                            <Setas src={SetaPreenchidaCima} onClick={() => votosCima(`posts/${id}/votes`, userVote, id)}/> 
                            
                        </p>
                        
                        <p>{voteSum?voteSum: 0}</p> 
                        
                        <p> <Setas src={SetaPreenchidaBaixo} onClick={() => votosBaixo(`posts/${id}/votes`, userVote, id)}/></p>

                    </ContainerVotos>
                    <div>
                        <p>{commentCount?commentCount:0} comentário</p>
                    </div>
                </ContainerFooter>
            </Container>
        )
    }): <LoadingCont><img src={Loading}/></LoadingCont>;
    console.log(form);
    console.log(posts);
    return(
        <LayoutContainer>

            <BuscarAutor>
                <Input
                    placeholder="Digite o nome do autor"
                    name="inputBusca"
                    value={form.inputBusca}
                    onChange={onChangeForm}
                />

                <Lupa src={Busca}/>
            </BuscarAutor>

            <AdicionarPost>
                <Link className="link" to="/adicionarpost">Add Post</Link>
            </AdicionarPost>
            
            <Layout>
                {mostrarPosts}
            </Layout>
                

        </LayoutContainer>
    )
};

export default ListaDePosts;