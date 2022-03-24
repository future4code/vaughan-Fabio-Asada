import React, {useState} from "react";
import HeaderPage from "../Header/Header";
import FooterPage from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import {FormContainer, ContainerImagem, H2, Imagem, H3, Paragrafo, Form, Inputs, Button} from "./LoginPageEstilos";
import Foguete from "../../assets/fogueteTratado.png";
import axios from "axios";
import useForms from "../Hooks/useForms";
import {EspacamentoHeader} from "../Espacamento/Espacamento";

const LoginPage= () => {
    const dadosDoFormulario={
        email:"",
        senha:""
    };

    const {form, onChangeForm, clear}= useForms(dadosDoFormulario);
    const navigate= useNavigate();

    const onSubmitForm= event => {
        event.preventDefault();

        const url="https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio/login";

        const body={
            "email": form.email,
	        "password": form.senha,
        };

        axios
            .post(url, body)
            .then(response => {
            localStorage.setItem("token",response.data.token);

            navigate("/admin/trips/list");
            })
            .catch(error => alert(error.response.data.message));

            clear();    
    }

    return(
        <div>
            <HeaderPage links={["Voltar"]} caminhos={["/"]}/>
            <EspacamentoHeader/>
            <FormContainer>

                <ContainerImagem>
                    <H2>LabeX</H2>
                    <Imagem src={Foguete}/>
                    <H3>Conta</H3>
                </ContainerImagem>

                <Paragrafo>Entre com sua conta LabeX.</Paragrafo>

                <Form onSubmit={onSubmitForm}>
                    <Inputs 
                    placeholder=" Email" 
                    onChange={onChangeForm} 
                    value={form.email}
                    type="email"
                    name="email"
                    required/>

        
                    <Inputs 
                    type="password" 
                    placeholder=" Senha" 
                    onChange={onChangeForm} 
                    value={form.senha}
                    name="senha"
                    pattern="^.{4,}"
                    title="Sua senha deve ter no mínimo 4 caracteres"
                    required/>
                    
                    <Button>Entrar</Button>

                </Form>

            </FormContainer>

            <FooterPage/>
        </div>
    )
};

export default LoginPage;