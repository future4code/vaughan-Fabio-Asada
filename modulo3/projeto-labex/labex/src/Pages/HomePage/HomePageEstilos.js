import styled from "styled-components"; 

export const HomePageContainer= styled.div`
    width:100vw;
    height:100vh;   
    background-color:black;
    color:#CA40F7; 
`;

export const Header= styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px;
    background-color:#32333E;
    position:relative;
`;

export const AreaViagensOuAdmin= styled.div`
    width:300px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size: 1.3rem;
`

export const Main= styled.main`
    width:70vw;
    height:80vh;   
    color:#CA40F7; 
    margin:auto;
    margin-top:20px;
    border:1px solid white
`;

export const Imagem=styled.img`
    width:150px;
    height:100px;
    position:absolute;
    top:3px;
    left: 0px;
`;

export const DivTextoImagem= styled.div`
    width:60vw;
    height:45vh;
    background-color:white;
    margin:auto;
    margin-bottom:15px;
`;

export const DivParagrafoImagem= styled.div`
    width:70vw;
    height:30vh;
    margin:auto;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
`;
export const Paragrafo=styled.p`
    width:500px;
    height:100px;
    margin-left:10px;
    padding-left:10px;
    background-color: #242F82;
    border-radius:6px;
    color:#A6B8FA;
`;
export const Footer= styled.footer`
    width:100vw;
    height:95px;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    background-color:#32333E;
`;

export const Nome=styled.span`
    font-size:1.3rem;
    font-weight:bolder;
    color:white;
`; 

export const H2=styled.h2`
    color:white;
    padding-left:10px;
`;
