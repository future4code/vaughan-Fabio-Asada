import React from "react";
import HeaderPage from "../Header/Header";
import FooterPage from "../Footer/Footer";
import {Form} from "./ApplicationFormPageEstilos";

const ApplicationFormPage= () => {

    return(
        <div>
            <HeaderPage links={["Voltar"]} caminhos={["/trips/list"]}/>
            <h1>Inscrever-se para uma viagem</h1>

            <Form>
                <select>
                    <option>Escolha uma Viagem</option>
                </select>

                <input placeholder="Nome"/>
                <input placeholder="Idade" type="number"/>
                <input placeholder="Texto de Candidatura"/>
                <input placeholder="Profissão"/>

                <select>
                    <option>Escolha um País</option>
                </select>

                <button>Enviar</button>
            </Form>

            <FooterPage/>
        </div>
    )
};

export default ApplicationFormPage;