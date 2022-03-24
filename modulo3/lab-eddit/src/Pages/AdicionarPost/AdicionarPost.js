import React, {useState} from "react";
import {useProtecao} from "../useProtecao/useProtecao";
import useForms from "../hooks/useForms";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {FormContainer, Form, Input, Textarea, Button, ImagemLoading} from "./styled";
import Loading from "../../assets/carregando.gif";

const AdicionarPost= () => {
    useProtecao();
    const {form, onChangeForm, clear}= useForms({title:"", body:""});
    const [carregando, setCarregando]= useState(false);
    const navigate= useNavigate();

    const cadastrarPost= () => {
        setCarregando(true);
        const url=` https://labeddit.herokuapp.com/posts`;
        const token= localStorage.getItem("token");

        const header={
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            }
        }

        axios
            .post(url, form, header)
            .then(() => {
                alert("Post criado com sucesso!");
                setCarregando(false);
                clear();
                navigate("/" )
            })
            .catch(error => {
                alert(error.response.data)
                setCarregando(false);
            })
    }

    const formSubmit= event => {
        event.preventDefault();
        cadastrarPost();
    }
    
    return(
        <FormContainer>
            <Form onSubmit={formSubmit}>
                <Input
                placeholder="Título do Post"
                required
                name="title"
                value={form.title}
                onChange={onChangeForm}
                pattern="^.{5,}"
                title="Seu título deve ter no mínimo 5 caracteres"
                />

                <Textarea 
                rows="4" 
                cols="40" 
                placeholder="Digite seu comentário"
                required
                name="body"
                value={form.body}
                onChange={onChangeForm}
                >
                </Textarea>

                <Button>{carregando? <ImagemLoading src={Loading}/>: "Adicionar"}</Button>
            </Form>
        </FormContainer>
    )
};

export default AdicionarPost;