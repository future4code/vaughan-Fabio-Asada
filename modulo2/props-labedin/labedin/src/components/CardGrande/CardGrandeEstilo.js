
import styled from "styled-components";


export const Container= styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;

`;

export const Imagem= styled.img`
    width: ${({medida}) => medida};
    margin-right: 10px;
    border-radius: 50%;
`;

export const ContainerInformacoes= styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;

`;

export const Titulo= styled.h4`
    margin-bottom: 15px;
`;