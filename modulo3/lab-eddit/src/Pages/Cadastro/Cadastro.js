import React from "react";
import {useNavigate} from "react-router-dom";
import { useSemProtecao } from "../useSemProtecao/useSemProtecao";
import useForms from "../hooks/useForms";
import axios from "axios";
import {Input, Button} from "./styled";

const Cadastro= ({setLogado}) => {
    const navigate= useNavigate();
    useSemProtecao();
    const {form, onChangeForm, clear} = useForms({username:"", email:"", password:""})

    const onSubmitForm= event => {
        event.preventDefault()
        cadastrar();
    };
   
    const cadastrar= () => {
        const url=`https://labeddit.herokuapp.com/users/signup`;
    
        const header={
            headers:{
                "Content-Type":"application/json"
            }
        };

        axios
            .post(url, form, header)
            .then(response => {
                localStorage.setItem("token", response.data.token);
                clear();
                navigate("/");
                setLogado("Logout")
            })
            .catch(error => {
                alert(error.response.data)
            })
    }

    return(
        <div>
            <form 
            className="
            d-flex 
            flex-column justify-content-center align-items-center
            "
            onSubmit={onSubmitForm}>
                <Input 
                placeholder="Nome do Usuário"
                required
                name="username"
                value={form.username}
                onChange={onChangeForm}
                pattern="^.{4,}"
                title="Sua senha deve ter no mínimo 4 caracteres"
                />

                <Input 
                placeholder="Email"
                type="email"
                required
                name="email"
                value={form.email}
                onChange={onChangeForm}
                />

                <Input 
                placeholder="Senha"
                type="password"
                required
                name="password"
                value={form.password}
                onChange={onChangeForm}
                pattern="^.{8,30}"
                title="Sua senha deve ter no mínimo 8 caracteres, e no maxímo 30 caracteres"
                />

                <Button>Cadastrar</Button>
            </form>
        </div>
    )
};

export default Cadastro;