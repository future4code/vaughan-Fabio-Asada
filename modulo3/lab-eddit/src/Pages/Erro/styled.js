import styled from "styled-components";

export const Container= styled.div`
    text-align:center;
`;

export const Imagem= styled.img`
    width:50vw;
    height:60vh;
    border-radius:6px;
    box-shadow:2px 2px 10px rgba(0,0,0, .6);

    @media(max-width:450px){
        width:90vw;
    }
`;