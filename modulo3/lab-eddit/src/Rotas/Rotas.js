import React from "react";
import {Routes, Route} from "react-router-dom";
import Cadastro from "../Pages/Cadastro/Cadastro";
import ListaDePosts from "../Pages/ListaDePosts/ListaDePosts";
import Login from "../Pages/Login/Login";
import DetalhesDoPost from "../Pages/DetalhesDoPost/DetalhesDoPost";
import AdicionarPost from "../Pages/AdicionarPost/AdicionarPost";
import Erro from "../Pages/Erro/Erro";

const Rotas= ({logado, setLogado}) => {

    return(
        <Routes>

            <Route path="/login" element={<Login logado={logado} setLogado={setLogado}/>}/>
            <Route path="/cadastro" element={<Cadastro setLogado={setLogado}/>}/>
            <Route path="/" element={<ListaDePosts/>}/>
            <Route path="/adicionarpost" element={<AdicionarPost/>}/>
            <Route path="/post/:id" element={<DetalhesDoPost/>}/>
            <Route path="*" element={<Erro/>}/>

        </Routes>
    )
};

export default Rotas;