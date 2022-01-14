import styled from "styled-components";

export const Template= styled.div`
    width:45vw;
    height:95vh;
    margin:auto;
    margin-top:15px;
    border:1px solid black;
    border-radius:6px;
    display:flex;
    flex-direction:column;
    justify-content:end;
    background-color:#E2D8CF;
`;

export const NomeDoUsuario= styled.span`
    font-weight:bolder;
    margin-left:10px;
    font-size:1.2rem;
`;

export const DivForm= styled.form`
    display:flex;
    justify-content:space-between;
`;

export const InputNome= styled.input`
    width:13vw;
`;

export const InputMensagem= styled.input`
    width:20vw;
    
`;

export const Button= styled.button`
    width:8vw;
    color:white;
    background-color:#17BD23;
    border:none;
    padding: 10px 12px;
    border-radius:6px;
    cursor:pointer;
    
    &:hover {
        background-color:#116417;
    }
`;

export const CardNomeMensagem= styled.p`
    width:fit-content;
    background-color:white;
    margin-bottom:10px;
    padding:0px 0px;
    border-radius:8px;
`;