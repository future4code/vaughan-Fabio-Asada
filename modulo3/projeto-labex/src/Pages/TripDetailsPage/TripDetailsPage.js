import React from "react";
import HeaderPage from "../Header/Header";
import FooterPage from "../Footer/Footer";

const   TripDetailsPage= () => {

    return(
        <div>
            <HeaderPage links={["Voltar"]} caminhos={["/admin/trips/list"]}/>
            Detalhes da Viagem
            <FooterPage/>
        </div>
    )
};

export default  TripDetailsPage;