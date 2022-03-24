import styled from "styled-components";

export const Container= styled.div`
    display:flex;
    aling-items:center;
    justify-content:space-between;
    width:1000px;
    margin:auto;
    box-shadow:5px 5px 10px rgba(0,0,0, .4);
    margin-top:60px;
    border-radius:20px;
`;

export const ContainerInfo= styled.div`
    background-color: #CACED5;
    color: #687CA3;
    width:300px;
    border-radius:10px;
`;

export const Form= styled.form`
    display:flex;
    flex-direction:column;
    width:500px;
    margin:auto;
`;

export const FormTitle= styled.h2`
    color: #687CA3;
`;

export const ContainerForm=styled.div`
    width:700px;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const Imagem=styled.img`
    margin-left:50px;
`;

export const ContainerInfoH1=styled.h1`
    margin-top:-200px;
    text-align:center;
    font-size:2.3rem;
`;

export const ContainerInfoP1=styled.p`
    margin-top:-48px;
    text-align:center;
    font-size:1.3rem;
`;

export const ContainerInfoP2=styled.p`
    margin-top:-20px;
    text-align:center;
`;

export const ContainerInfoP3=styled.p`
    margin-top:180px;
    margin-bottom:50px;
    text-align:center;
    font-size:1.2rem;
`;

export const Span=styled.span`
    font-weight:bolder;
`;

export const Inputs= styled.input`
    border-radius:6px;
    width:500px;
    height:45px;
    border:3px solid #666868;
    margin-bottom:25px;
`;

export const Select= styled.select`
    border-radius:6px;
    width:510px;
    height:55px;
    border:3px solid #666868;
    margin-bottom:25px;
`;

export const Button= styled.button`
    background-color:#CACED5;
    color:#687CA3;
    font-size:1.1rem;
    font-weight:bolder;
    width:120px;
    border:none;
    border-radius:6px;
    padding:8px 5px;
    cursor:pointer;
    box-shadow:3px 3px 8px rgba(0,0,0,.4);
    margin:auto;
    margin-top:20px;
    margin-bottom:30px;
`
