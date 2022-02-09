import styled from "styled-components";

export const Container= styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:15px;
`;

export const ContainerLista= styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0px 20px;
    cursor:pointer;
    margin-bottom:10px;
    &:hover{
        background-color:rgba(0,0,0, .4)
    }
`;

export const Imagem= styled.img`
    width:70px;
    height:70px;
    border-radius:50%;
`;

export const Buttom=styled.button`
    background-color:#119F2C;
    cursor:pointer;
    color:white;
    padding:10px 15px;
    border:none;
    border-radius:6px;
    box-shadow:5px 5px 5px rgba(0, 0, 0, .4);
    &:hover{
        background-color:#C5F1C3;
        color:black;
    }
`;

export const ButtomExcluir=styled.button`
    background-color:#EC1F1F;
    cursor:pointer;
    color:white;
    padding:10px 15px;
    border:none;
    border-radius:6px;
    box-shadow:5px 5px 5px rgba(0, 0, 0, .4);
    &:hover{
        background-color:#E39494;
        color:black;
    }
`;

