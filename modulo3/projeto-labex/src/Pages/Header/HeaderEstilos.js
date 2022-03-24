import styled from "styled-components";

export const Header= styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0px 20px;
    background-color:#32333E;
    position:fixed;
    top:0px;
    width:97.9vw;
`;

export const Imagem=styled.img`
    width:150px;
    height:100px;
    position:absolute;
    top:-5px;
    left: 55px;
`;

export const Nome=styled.span`
    font-size:1.3rem;
    font-weight:bolder;
    color:white;
`;

export const AreaViagensOuAdmin= styled.div`
    width:400px;
    align-items:center;
    font-size: 1.3rem;
`;

export const Ul= styled.ul`
    display:flex;
    justify-content:space-evenly;
`;

export const Li= styled.li`
    list-style: none;
`;