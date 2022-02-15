import React from "react";
import HeaderPage from "../Header/Header";
import FooterPage from "../Footer/Footer";

const ListTripsPages= () => {

    return(
        <div>
            <HeaderPage links={["Voltar", "Inscrever-se"]} caminhos={["/", "/trips/application"]}/>
            <h1>Lista de Viagens</h1>
            <div>
                <p>Nome: Plutão</p>
                <p>Descrição:  eu sou um planeta sim emmmm tu nemm vem falar caluniass</p>
                <p>Planeta: Plutão</p>
                <p>Data: 2022-02-22</p>
            </div>

            <FooterPage/>
        </div>
    )
};

export default ListTripsPages;