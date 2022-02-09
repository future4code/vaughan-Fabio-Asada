import styled from "styled-components";

export const Header= styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:15px;
`;

export const ContainerInfo= styled.div`
    text-align:center;
    position:relative;
`

export const Image= styled.img`
    width:400px;
    height:500px;
`;

export const DivContainer= styled.div`
    color:white;
    font-size:1.2rem;
    position:absolute;
    bottom:5px;
    left:25px;
`

export const DivInfo= styled.div`
    background-color:rgba(0,0,0,.7);
    width:400px;
    height:180px;
`;

export const NomeIdade= styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0px 10px;
    height:50px;
`;

export const DivButtom= styled.div`
    margin-top:50px;
    display:flex;
    justify-content:space-evenly;
`;

export const ImgCoracao= styled.img`
    width:80px;
    height:90px;
    cursor:pointer;
`;

export const ImgBotas= styled.img`
    margin-top:-35px;
    padding-top:10px;
    width:150px;
    cursor:pointer;
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
