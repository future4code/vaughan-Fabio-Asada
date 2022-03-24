import React from "react";
import {Navbar, Container} from "react-bootstrap"
import {Link, useNavigate} from "react-router-dom";
import "./Header.css";
import {Button} from "./styled";

const Header= ({logado, setLogado}) => {
    const navigate= useNavigate();
    const token= localStorage.getItem("token");
    
    const logout=() => {
        localStorage.removeItem("token");
    };

    const rightButtonAction= () => {
      if(token){
        logout();
        setLogado("Login");
        navigate("/login" );
      }else{
        navigate("/login" );
      }
    }



    return(
        <Navbar className="bg-danger shadow-lg mb-5">
          <Container>
            <Navbar.Brand>
                <Link to="/" className="header-logo">LabEddit</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Button 
                onClick={rightButtonAction}
                >{logado}</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
};

export default Header;