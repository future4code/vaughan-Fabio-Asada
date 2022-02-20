import React from "react";
import HeaderPage from "../Header/Header";
import FooterPage from "../Footer/Footer";
import {Form, Container, ContainerInfo, ContainerForm, Imagem, ContainerInfoH1, ContainerInfoP1, ContainerInfoP2, ContainerInfoP3, Span, Inputs, Button, FormTitle, Select} from "./CreateTripPageEstilos"
import {useProtecao} from "../ProtecaoDeRotas/ProtecaoDeRotas";
import useForms from "../Hooks/useForms";
import axios from "axios";
import Foguete from "../../assets/fogueteTratado.png";
import {EspacamentoHeader} from "../Espacamento/Espacamento";

const CreateTripPage= () => {
    useProtecao();
    const dadosIniciais={
        name:"",
        planet:"",
        date:"",
        description:"",
        durationInDays:"",
    }

    const {form, onChangeForm, clear}= useForms(dadosIniciais);
    
    const planetas= () => {
        const sistemaSolar= ["Mercúrio", "Vênus", "Terra","Marte", "Jupiter", "Saturno", "Urano", "Netuno", "Plutão"];

        return(sistemaSolar.map(item => <option key={item}>{item}</option>))
    }

    const dataMinima= () => {
        const data= new Date();
        const ano= data.getFullYear();
        const mes= data.getMonth() + 1;
        const dia= data.getDate();

        return `${ano}-${mes < 10? `0${mes}`: mes}-${dia < 10? `0${dia}`: dia}`;
    }

    const criarViagem= () => {
        const token=localStorage.getItem("token");

        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio/trips`;

        const body={
            "name": form.name,
            "planet": form.planet,
            "date": form.date.split("-").reverse().join("/"),
            "description": form.description,
            "durationInDays": Number(form.durationInDays)
        };

        const header={
            headers:{
                "Content-Type":"application/json",
                "auth":token
            }
        }

        axios
            .post(url, body, header)
            .then(response => alert("Viagem criada com sucesso!"))
            .catch(error => alert("Falha ao criar viagem!"))

        clear();
    }

    return(
        <div>
            <HeaderPage links={["Voltar"]} caminhos={["/admin/trips/list"]}/>
            <EspacamentoHeader/>
            <Container>

                <ContainerInfo>
                    <Imagem src={Foguete}/>
                    <ContainerInfoH1>LabeX</ContainerInfoH1>
                    <ContainerInfoP1>Turismo Espacial</ContainerInfoP1>
                    <ContainerInfoP2>Realizando Sonhos</ContainerInfoP2>
                    <ContainerInfoP3><Span>Fasada</Span> LTDA</ContainerInfoP3>
                </ContainerInfo>


                <ContainerForm>

                    <Form>
                        <FormTitle>Crie Suas Viagens Espaciais</FormTitle>
                        <Inputs 
                        placeholder="Nome"
                        required
                        pattern="^.{5,}"
                        title="O nome da viagem tem que ter no mínimo 5 caracteres"
                        value={form.name}
                        name="name"
                        onChange={onChangeForm}/>

                        <Select 
                        value={form.planet}
                        name="planet"
                        onChange={onChangeForm}>
                            <option>Escolha um Planeta</option>
                            {planetas()}
                        </Select>

                        <Inputs 
                        type="date"
                        required
                        min={dataMinima()}
                        value={form.date}
                        name="date"
                        onChange={onChangeForm}/>

                        <Inputs 
                        placeholder="Descrição"
                        required
                        pattern="^.{30,}"
                        title="A descrição da viagem tem que ter no mínimo 30 caracteres"
                        value={form.description}
                        name="description"
                        onChange={onChangeForm}/>

                        <Inputs 
                        placeholder="Duração em dias" 
                        type="number"
                        required
                        min={50}
                        value={form.durationInDays}
                        name="durationInDays"
                        onChange={onChangeForm}/>

                        <Button onClick={criarViagem}>Criar</Button>
                    </Form>

                </ContainerForm>

            </Container>




            <FooterPage/>
        </div>
    )
};

export default CreateTripPage;