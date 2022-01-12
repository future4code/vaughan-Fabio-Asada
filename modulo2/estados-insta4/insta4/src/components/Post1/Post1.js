import React from "react";
import styled from "styled-components";

const Container= styled.div`
    border: 1px solid gray;
    width: 300px;
    margin-bottom: 10px;
    margin-top:15px;
`;

const Perfil= styled.img`
    height: 30px;
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
`;

const Paisagem= styled.img`
    width: 100%;
`;

class Post1 extends React.Component{
    render(){
        return(
        
            <Container>

                <Perfil src={this.props.img}/> <span>André</span> 
                <Paisagem src={this.props.paisagem}/>

            </Container>
        )
    }
};

export default Post1;