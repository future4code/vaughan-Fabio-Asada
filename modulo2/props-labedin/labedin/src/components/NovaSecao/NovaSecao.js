import React from "react";
import * as Card from "./NovaSecaoEstilos";

import { NovoComponente } from "../NovoComponente/NovoComponente";

export const NovaSecao= () => {

    const { Container } = Card;

    return(

        <React.Fragment>

            <h2>Interesses</h2>

            <Container>

                <NovoComponente/>

            </Container>

        </React.Fragment>


    )
}