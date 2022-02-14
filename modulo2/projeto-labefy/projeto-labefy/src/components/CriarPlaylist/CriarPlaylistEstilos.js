import styled from "styled-components";


export const Body=styled.div`
    background-image:linear-gradient(to bottom,#F0E9A9,#FFC000) ;
    width:100vw;
    height:fit-content;
    display:flex;
    flex-direction:column;
`;

export const Container= styled.div`
    text-align:center;
    margin-top:100px;
`;

export const Input=styled.input`
    border:none;
    border-bottom: 2px solid black;
    margin-right:20px;
    height:30px;
    width:350px;
    border-radius:5px;
`;

export const Button= styled.button`
    color:white;
    background-color:#F76DD2;
    border:none;
    font-size:1.1rem;
    padding:7px 15px;
    border-radius:7px;
    box-shadow:5px 5px 5px rgba(0,0,0,.5);
    cursor: pointer;
    &:hover{
        background-color:#E7237F;
    }
`;

export const Imagem=styled.img`
    width:1000px;
    margin-top:100px;
    margin:auto;
    margin-top:161px;
`;


