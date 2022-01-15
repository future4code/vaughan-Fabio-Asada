import styled from "styled-components";

export const Template= styled.div`
    width:45vw;
    height:95vh;
    margin:auto;
    margin-top:15px;
    border:1px solid black;
    border-radius:6px;
    display:flex;
    flex-direction:column;
    justify-content:end;
    background-color:#E2D8CF;
`;

export const NomeDoUsuario= styled.span`
    font-weight:bolder;
    font-size:0.8em;
    color:#D897A5;
`;

export const DivForm= styled.form`
    display:flex;
    justify-content:space-between;
    margin-bottom:10px;
    padding:10px;
`;

export const InputNome= styled.input`
    width:10vw;
    border:none;
    border-radius:6px;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
`;

export const InputMensagem= styled.input`
    width:20vw;
    border:none;
    border-radius:6px;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
`;

export const Button= styled.button`
    width:8vw;
    color:black;
    background-color:#EBEBEB;
    border:none;
    padding: 10px 12px;
    border-radius:6px;
    cursor:pointer;
    font-weight:bolder;
    font-size:1rem;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    &:hover {
        background-color:#6A7171;
        color:white;
    }
`;

export const CardNomeMensagem= styled.div`
    width:fit-content;
    background-color:white;
    margin-bottom:10px;
    cursor:pointer;
    border-radius:8px;
    padding:0px 15px;
    text-align:left;
    margin-left:15px;
    font-weight: 600;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    word-wrap: break-word;
    max-width: 60%;
    min-width: 8%;
    line-height: 1.2;
    position: relative;

    p{
        &:after {
            content: '';
            border: 15px solid transparent;
            border-top-color: white;
            position: absolute;
            top: 0px;
            left: -8px;
        }
    }
`;

export const CardNomeMensagemEu= styled.div`
    width:fit-content;
    background-color:#D8F7D5;
    color:black;
    margin-bottom:10px;
    cursor:pointer;
    border-radius:8px;
    padding:0px 15px;
    text-align:center;
    margin-left:auto;
    margin-right:15px;
    font-weight: 600;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    word-wrap: break-word;
    max-width: 60%;
    min-width: 8%;
    line-height: 1.2;
    position: relative;

    p{
        &:after {
            content: '';
            border: 15px solid transparent;
            border-top-color: #D8F7D5;
            position: absolute;
            top: 0px;
            right: -8px;
        }
    }
`;

export const DoisCheck= styled.img`
    position: absolute;
    height: 0.5em;
    right: 4px;
    bottom: 6px;
`;

export const DoisCheckEsquerda= styled.img`
    position: absolute;
    height: 0.5em;
    left: 4px;
    bottom: 6px;
`;