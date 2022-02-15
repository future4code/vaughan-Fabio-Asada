import React from "react";
import HeaderPage from "../Header/Header";
import FooterPage from "../Footer/Footer";
import { Link } from "react-router-dom";
import {Form} from "./LoginPageEstilos";

const LoginPage= () => {
    return(
        <div>
            <HeaderPage links={["Voltar"]} caminhos={["/"]}/>
            <h1>Login</h1>
            <Form>
                <input placeholder="E-mail"/>
                <input placeholder="Senha"/>
                <button><Link to="/admin/trips/list">Entrar</Link></button>

            </Form>

            <FooterPage/>
        </div>
    )
};

export default LoginPage;