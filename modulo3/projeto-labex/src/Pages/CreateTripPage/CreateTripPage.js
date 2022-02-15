import React from "react";
import HeaderPage from "../Header/Header";
import FooterPage from "../Footer/Footer";
import {Form} from "./CreateTripPageEstilos"

const CreateTripPage= () => {

    return(
        <div>
            <HeaderPage links={["Voltar"]} caminhos={["/admin/trips/list"]}/>
            Criar Viagem

            <Form>
                <input placeholder="Nome"/>
                <select>
                    <option>Escolha um Planeta</option>
                </select>
                <input type="date"/>
                <input placeholder="Descrição"/>
                <input placeholder="Duração em dias" type="number"/>
                <button>Criar</button>
            </Form>

            <FooterPage/>
        </div>
    )
};

export default CreateTripPage;