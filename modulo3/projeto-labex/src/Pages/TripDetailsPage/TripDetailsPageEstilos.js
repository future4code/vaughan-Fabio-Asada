import styled from "styled-components";

export const TripContainer= styled.div`
    // width:600px;
    // margin:auto;
`;

export const H1= styled.h1`
    text-align:center;
    color: #687CA3;
`;

export const Paragrafo= styled.p`
    text-align:center;
    margin:auto;
    font-size:1.3rem;
    font-weight:bolder;
    color:#2A2B5B;
    width:90vw;
    margin-top:-5px;
`;

export const Paragrafo2= styled.p`
    width:100vw;
    margin:auto;
    font-size:1.3rem;
    font-weight:bolder;
    color:#2A2B5B;
    width:90vw;
    margin-top:-20px;
    text-align:center;
`;

export const ContainerCards=styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    padding-left:100px;
`;

export const Cards=styled.div`
    width:450px;
    height:500px;
    background-color:#CACED5;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    word-wrap: break-word;
    overflow:auto;
    padding:10px;
    border-radius:6px;
    box-shadow:5px 5px 15px rgba(0, 0, 0, .6);
    padding-top:80px;
    margin-right:15px;
`;

export const CardsNome=styled.p`
    color:#2A2B5B;
    font-size:1.6rem;
    font-weight:bolder;
    margin-top:-70px;
`;

export const CardsNomeSpan=styled.span`
    color:#2A2B5B;
    font-size:1rem;
    font-weight:500;
    margin-left: 15px;
`;

export const CardsDescricao=styled.p`
    color:#2A2B5B;
    font-size:1.2rem;
    font-weight:bolder;
    color: #687CA3;
    text-align:center;
`;

export const CardsProfissao=styled.p`
    color:#2A2B5B;
    // font-size:1.2rem;
    // font-weight:bolder;
    color: #687CA3;
    margin-top:-30px;
`;

export const CardsNomePais=styled.p`
    color:#2A2B5B;
    font-size:1.2rem;
    font-weight:600;
`;

export const CardsNomeButtonAprovar=styled.button`
    color:#fff;
    background-color:#6289F6;
    font-size:1.2rem;
    border:none;
    padding:5px 15px;
    border-radius:3px;
    box-shadow:2px 2px 7px rgba(0, 0, 0, .6);
    margin-right:40px;
    cursor:pointer;
`;

export const CardsNomeButtonReprovar=styled.button`
    color:#fff;
    background-color:#7E0614;
    font-size:1.2rem;
    border:none;
    padding:5px 15px;
    border-radius:3px;
    box-shadow:2px 2px 7px rgba(0, 0, 0, .6);
    cursor:pointer;
`;

export const Aprovados=styled.p`
    color:#2A2B5B;
    font-size:1.8rem;
    font-weight:bolder;
    text-align:center;
    background-color: #E2E3EC;
    margin-top: -15px;
    width:600px;
    margin:auto;
    margin-bottom:20px;
    box-shadow:2px 2px 7px rgba(0, 0, 0, .6);
`;

export const ContainerDescricaoDaViagem= styled.div`
    background-color: #E2E3EC;
    text-align:center;
    padding:15px;
    box-shadow:5px 5px 15px rgba(0, 0, 0, .6);
    margin-bottom:40px;
    margin-top:40px;
`;

export const DescricaoNome= styled.p`
    color:#2A2B5B;
    font-size:1.8rem;
    font-weight:bolder;
`;

export const DescricaoPlaneta= styled.p`
    color:#687CA3;
    font-size:1.2rem;
    font-weight:600;
    margin-top:-40px;
`;

export const Descricao= styled.p`
    color:#2554A3;
    font-size:1.5rem;
    font-weight:bolder;
`;

export const DiasEData= styled.div`
    display:flex;
    justify-content:space-evenly;
    width:240px;
    margin:auto;
    color:#2A2B5B;
    font-weight:bolder;
`;