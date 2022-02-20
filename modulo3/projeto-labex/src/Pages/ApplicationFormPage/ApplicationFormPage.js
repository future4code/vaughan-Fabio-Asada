import React, {useState, useEffect} from "react";
import HeaderPage from "../Header/Header";
import FooterPage from "../Footer/Footer";
import {Form, Container, ContainerInfo, ContainerForm, Imagem, ContainerInfoH1, ContainerInfoP1, ContainerInfoP2, ContainerInfoP3, Span, Inputs, Button, FormTitle, Select } from "./ApplicationFormPageEstilos";
import axios from "axios";
import useForms from "../Hooks/useForms";
import Foguete from "../../assets/fogueteTratado.png";
import {EspacamentoHeader} from "../Espacamento/Espacamento";

const ApplicationFormPage= () => {
    const [paises, setPaises]= useState([]);
    const [viagem, setViagem]= useState([]);
    const [escolhendoViagem, setEscolhendoViagem]= useState('');
    const [idDaViagem, setIdDaViagem]= useState("");

    const dadosDoCandidato={
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: ""
    };

   const {form, onChangeForm, clear}= useForms(dadosDoCandidato)

    useEffect(() => {
        const url="https://servicodados.ibge.gov.br/api/v1/paises/{paises}";

        axios
            .get(url)
            .then(response => setPaises(response.data))
            .catch(error => console.log(error.response));

        const dados= JSON.parse(localStorage.getItem("viagem"));
        setViagem(dados);
    }, []);
    
    const nomeDasViagens=viagem.map(obj => <option>{obj.name}</option>);

    const mostrarPaises= paises.map((obj, index) => {
        return <option key={index}>{obj.nome.abreviado}</option>
    });


    const formularioDeCadastro= event => {
        event.preventDefault();
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio/trips/${idDaViagem}/apply`;

        const header={
            headers:{
                "Content-Type":"application/json"
            }
        }
        axios
            .post(url, form, header)
            .then(response => {
                alert("Registro feito com sucesso!");
            })
            .catch(error => console.log(error.response))

        clear();
    }
    
    const onChangeEscolhendoViagem= event => {
        setEscolhendoViagem(event.target.value);
    };

    
    const idDaViagemEscolhida= viagem.filter(obj => obj.name === escolhendoViagem);

    useEffect(() => {
        if(idDaViagemEscolhida.length){
            setIdDaViagem(idDaViagemEscolhida[0].id)
        }
    },[escolhendoViagem]);

    return(
        <div>
            <HeaderPage links={["Voltar"]} caminhos={["/trips/list"]}/>
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
                    
                    <Form onSubmit={formularioDeCadastro}>
                        <FormTitle>Inscreva-se em uma viagem</FormTitle>
                        <Select 
                        onChange={onChangeEscolhendoViagem} value={escolhendoViagem}
                        >
                            <option>Escolha uma Viagem</option>
                            {nomeDasViagens}
                        </Select>

                        <Inputs 
                        placeholder="Nome"
                        pattern="^.{3,}" 
                        title="O nome deve ter no mínimo 3 letras" 
                        required
                        value={form.name}
                        onChange={onChangeForm}
                        name="name"/>

                        <Inputs 
                        placeholder="Idade" type="number" 
                        min={18} 
                        required
                        value={form.age}
                        onChange={onChangeForm}
                        name="age"/>

                        <Inputs 
                        placeholder="Texto de Candidatura" 
                        pattern="^.{30,}"
                        title="O texto deve ter no mínimo 30 caracteres"
                        required
                        value={form.applicationText}onChange={onChangeForm}
                        name="applicationText"/>

                        <Inputs placeholder="Profissão"
                        pattern="^.{10,}" 
                        title="A profissão deve ter no mínimo 10 caracteres"
                        required
                        value={form.profession}
                        onChange={onChangeForm}
                        name="profession"/>

                        <Select 
                        value={form.country}
                        onChange={onChangeForm}
                        name="country">
                            <option>Escolha um País</option>
                            {mostrarPaises}
                        </Select>

                        <Button>Cadastrar</Button>
                    </Form>
                </ContainerForm>

            </Container>

            <FooterPage/>
        </div>
    )
};

export default ApplicationFormPage;