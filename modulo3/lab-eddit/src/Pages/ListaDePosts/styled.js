import styled from "styled-components";

export const LayoutContainer= styled.div`
    width:100%;
`;

export const Layout= styled.div`
    display:flex;
    flex-wrap:wrap;
    position:relative;
    
    @media(max-width:1000px){
        display:flex;
        flex-direction:column;
    }
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

    @media(max-width:1000px){
        width:100vw;
    }

    @media(max-width:600px){
        width:100vw;
    }

    @media(max-width:450px){
        width:90vw;
    }
`;

export const ContainerFooter=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    border:1px solid white;
    padding:5px;
`;


export const ContainerVotos= styled.div`
    width:5vw;
    max-width:100px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const AdicionarPost= styled.div`
    width:10vw;
    padding:5px 0px;
    background-color:#5F8CF4;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1rem;
    font-weight:bolder;
    cursor:pointer;
    box-shadow:2px 2px 5px rgba(0, 0, 0, .6);
    margin:auto;
    margin-bottom:30px;

    &:hover{
        background-color:#3A4B71;
    }

    @media(max-width:1000px){
        width:15vw;
    }

    @media(max-width:750px){
        width:25vw;
    }

    @media(max-width:450px){
        width:90vw;
        padding:3px 0px;
        font-size:1.1rem;
        margin-bottom:35px;
    }
`;

export const Setas= styled.img`
    width:3vw;
    cursor:pointer;

    @media(max-width:450px){
        width:13vw;
    }
`;

export const Excluir= styled.img`
    width:4vw;
    cursor:pointer;
`;

export const LoadingCont= styled.div`
    width:100vw;
    height:100vh;
    text-align:center;
    padding-top:100px;
`;

export const Input=styled.input`
    width:50vw;
    max-width:350px;
    margin-bottom:60px;
    border:3px solid #DEDEDE;
    border-radius:6px;
    margin-top:30px;

    @media(max-width:400px){
        width:85vw;
    }
`;

export const BuscarAutor= styled.div`
    width:30vw;
    padding:5px 0px;
    margin:auto;
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;

    @media(max-width:1000px){
        width:50vw;
    }

    @media(max-width:900px){
        width:100vw;
    }

    @media(max-width:450px){
        width:100vw;
        padding:3px 0px;
        margin-bottom:35px;
    }
`;

export const Lupa= styled.img`
    width:4vw;
    margin-top:-30px;

    @media(max-width:1250px){
        width:6vw;
    }

    @media(max-width:950px){
        width:8vw;
    }

    @media(max-width:700px){
        width:10vw;
    }

    @media(max-width:510px){
        width:12vw;
    }

    @media(max-width:400px){
        width:10vw;
    }

`;