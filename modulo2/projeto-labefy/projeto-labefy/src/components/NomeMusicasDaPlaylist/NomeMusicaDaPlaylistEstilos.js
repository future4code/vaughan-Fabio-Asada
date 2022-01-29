import styled from "styled-components";

export const H3= styled.h3`
    font-family: 'Mochiy Pop P One', sans-serif;
    color:black;
    line-height:50px;
`

export const Body= styled.div`
background-image:linear-gradient(to bottom,#F0E9A9,#FFC000);
padding-top:50px;
text-align:center;
height:fit-conten;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

export const Input=styled.input`
    border:none;
    border-bottom: 2px solid black;
    margin-right:20px;
    height:30px;
    width:350px;
    border-radius:5px;
    margin-bottom:15px;
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
    margin:45px 0;
    &:hover{
        background-color:#E7237F;
    }
`;

export const ContainerPlayer=styled.div`
    margin-bottom:25px;
    width:600px;
    padding-bottom:35px;
    background-color:white;
    border-radius: 8px;
    box-shadow:5px 5px 10px rgba(0, 0, 0, .6);
    position:relative;
`;


export const ArtistaEMusica=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;
