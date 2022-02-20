import styled from "styled-components";

export const Fundo=styled.div`
    background-color:#fff;
    width:100vw;
    height:100vh;
    color:#2D2B2D;
`; 

export const DivContainer= styled.div`
    width:400px;
    height:470px;
    padding:10px;
    margin-bottom:30px;
    border-radius:10px;
    background-color: #CACED5;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, .6);
    word-wrap: break-word;
    cursor:pointer;
    color: #687CA3;
    overflow: auto;
    position:relative;
    
`;

export const H1=styled.h1`
    text-align:center;
    color:#F87676;
`;

export const Cards=styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
`;

export const ParagrafoTitulo= styled.p`
    text-align:center;
    font-size:1.6rem;
    font-weight:bolder;
    color:#2A2B5B;
    padding:10px 0px;
    border-radius:10px;
    border-bottom:3px solid white;
`;

export const Span= styled.span`
    font-size:1.2rem;
    font-weight:bolder;
    color:#2A2B5B;
`;

export const ParagrafoDuracao= styled.p`
    margin-right:60px;
    text-align:center;
`;

export const ParagrafoData= styled.p`
    text-align:center;
`;

export const DataEDuracao= styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:70px;
`;

export const Descricao=styled.p`
    text-align:center;
`;

export const TextoDescricao=styled.p`
    text-align:center;
    font-size:1.7rem;
    font-weight:500;
    font-style: italic;
    margin-top:0px;
`;

export const Planeta=styled.p`
    font-weight:bolder;
    font-size:1.2rem;
    margin-top:-25px;
    margin-bottom:40px;
    color:rgb(104, 124, 163); 
    text-align:center;
`;

export const DivImg= styled.div`
    width:97.9vw;
    text-align:center;
    padding-top:10px;

`;

export const LoadingImg= styled.img`
    width:50vw;
`;