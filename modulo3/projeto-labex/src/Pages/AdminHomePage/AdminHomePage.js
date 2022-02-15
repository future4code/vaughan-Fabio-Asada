import React from "react";
import HeaderPage from "../Header/Header";
import FooterPage from "../Footer/Footer";
import {Link} from "react-router-dom";

const AdminHomePage= () => {

    return(
        <div>
            <HeaderPage links={["Voltar", "Logout"]} caminhos={["/", "/login"]}/>
            <h1>Painel Administrativo</h1>
            <button><Link to="/admin/trips/create">Criar Viagem</Link></button>
            
            <p><Link to="/admin/trips/detalhes">Detalhes da viagem</Link></p>
            <FooterPage/>
        </div>
    )
};

export default AdminHomePage;