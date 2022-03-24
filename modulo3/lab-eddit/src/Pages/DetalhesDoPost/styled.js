import styled from "styled-components";

export const Layout= styled.div`
    display:flex;
    flex-wrap:wrap;
    position:relative;
`;

export const Container= styled.div`
    width:25vw;
    max-width:350px;
    background-color:#EB9F99;
    color:white;
    text-align:center;
    margin:auto;
    margin-bottom:20px;
    cursor:pointer;
    overflow: auto;

    @media(max-width:400px){
        width:90vw;
    }
`;

export const ContainerFooter=styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
    border:1px solid white;
    padding:5px;
`;

export const FooterComentarios=styled.div`
    display:flex;
    justify-content:start;
    align-items: center;
    border:1px solid white;
    padding:15px 0px;
    margin-top:20px;
`;


export const ContainerVotos= styled.div`
    width:5vw;
    max-width:100px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const AdicionarPost= styled.div`
    width:50px;
    height:50px;
    background-color:#5F8CF4;
    color:white;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:2rem;
    font-weight:bolder;
    cursor:pointer;
    box-shadow:2px 2px 5px rgba(0, 0, 0, .6);
    position:fixed;
    bottom:25px;
    right:25px;
    &:hover{
        background-color:#3A4B71;
    }
`;

export const Setas= styled.img`
    width:3vw;
    cursor:pointer;

    @media(max-width:400px){
        width:15vw;
    }
`;

export const Excluir= styled.img`
    width:4vw;
    cursor:pointer;
`;

export const Form= styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const Textarea=styled.textarea`
    width:30vw;
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

export const LoadingCont= styled.div`
    width:100vw;
    height:100vh;
    text-align:center;
    padding-top:100px;
`;