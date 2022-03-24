import styled from "styled-components";

export const FormContainer= styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100vw;
    margin-top:10vh;
`;

export const Form= styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const Input=styled.input`
    width:50vw;
    max-width:350px;
    margin-bottom:25px;
    border:3px solid #DEDEDE;
    border-radius:6px;

    @media(max-width:400px){
        width:90vw;
    }
`;

export const Button=styled.button`
    width:50vw;
    max-width:350px;
    margin-bottom:25px;
    border:none;
    border-radius:6px;
    color:white;
    background-color:#FD4C4C;
    &:hover{
        background-color:#FCA8A8;
    }

    @media(max-width:400px){
        width:90vw;
    }
`;

export const ButtonCadastrar=styled.button`
    width:50vw;
    max-width:350px;
    margin-bottom:25px;
    border:none;
    color:#FD4C4C;
    background-color:white;
    &:hover{
        color:#910F0F;
    }
`;

export const Imagem= styled.img`
    width:70vw;
    max-width:350px;
    margin:20px 0px;
`;

export const ImagemLoading= styled.img`
    width:3vw;
    max-width:100px;
`;