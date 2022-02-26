import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import {FormContainer, Form, Input, Button, ButtonCadastrar, Imagem, ImagemLoading} from "./styled";
import useForms from "../hooks/useForms";
import axios from "axios";
import { useSemProtecao } from "../useSemProtecao/useSemProtecao";
import Loading from "../../assets/carregando.gif";
import Logo from "../../assets/logotipo.png";

const Login= ({setLogado}) => {
    const navigate= useNavigate();
    const {form, onChangeForm, clear}= useForms({email:"", password:""})
    useSemProtecao();
    const [carregando, setCarregando]= useState(false);

    const onSubmitForm= event => {
        event.preventDefault();
        login(setLogado);
    };

    const login= (setLogado) => {
        setCarregando(true);
        const url= `https://labeddit.herokuapp.com/users/login`;

        const header={
            headers:{
                "Content-Type":"application/json"
            }
        }

        axios
            .post(url,form,header)
            .then(response =>{
                localStorage.setItem("token",response.data.token);
                clear();
                setCarregando(false);
                setLogado("Logout")
                navigate("/");
            })
            .catch(error => {
                setCarregando(false);
                alert(error.response.data)
            })
    }

    
    const onClickCadastrar= () => {
        navigate("/cadastro");
    }
    
    return(
        <FormContainer>
            <Imagem src={Logo}/>

            <Form onSubmit={onSubmitForm}>

                <Input
                    type="email" 
                    placeholder="Email"
                    name="email"
                    value={form.email}
                    onChange={onChangeForm}
                    required
                />

                <Input 
                    type="password" 
                    placeholder="Senha" 
                    name="password"
                    value={form.password}
                    onChange={onChangeForm}
                    required
                    pattern="^.{8,30}"
                    title="Sua senha deve ter no mínimo 8 caracteres, e no maxímo 30 caracteres"
                />

                <Button>{carregando? <ImagemLoading src={Loading}/>:"Entrar"}</Button>
            </Form>
                <ButtonCadastrar onClick={onClickCadastrar}>Não possue conta? Cadastra-se</ButtonCadastrar>
        </FormContainer>
    )
};

export default Login;