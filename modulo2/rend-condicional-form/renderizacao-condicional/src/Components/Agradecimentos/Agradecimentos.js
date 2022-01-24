import React from "react";
import styled from "styled-components";

const Container= styled.div`
    width:700px;
    margin:auto;
    margin-top:20px;
    text-align:center;
`;

class Agradecimentos extends React.Component{

    render(){

        return(
            <Container>
                
                <h2>O FORMULÁRIO ACABOU</h2>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
        
            </Container>
        )
    }
};

export default Agradecimentos;