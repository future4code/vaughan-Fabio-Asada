import React, { useState, useEffect } from "react";
import "./Pokemon.css";
import axios from "axios";

const Pokemon= () => {
    const [pokemon, setPokemon]= useState("");
    const [listaDePokemons, setListaDePokemons] = useState([]);
    const [infoDoPokemon, setInfoDoPokemon]= useState([])
    
    useEffect(() => buscarPokemons(), []);
    useEffect(() => informacoesDoPokemon(), [pokemon]);

    const pokemonEscolhido= event => {
        setPokemon(event.target.value);
    }

    const buscarPokemons= () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
            .then(response => {
                
                setListaDePokemons(response.data.results)
            })
            .catch(error => console.log(error))
    };

    const pokemonsSelect= listaDePokemons.map((obj, index) => {
        return(
            <option key={index} value={obj.name}>{obj.name}</option>
        )
    });

    const informacoesDoPokemon= () => {

        if(pokemon === "Nenhum"){
            setInfoDoPokemon([])
        }

        const info= listaDePokemons.filter(obj => {
            return obj.name === pokemon;
        });
        
        if(info.length){
            axios
                .get(info[0].url)
                .then(response => setInfoDoPokemon([response.data]))
                .catch(error => console.log(error));
        }
    };

    const mostrarInfoDoPokemon= () => {
            if(infoDoPokemon.length){
                return (
                    <div>
                        <p>{infoDoPokemon[0].name}</p>
                        <p>{infoDoPokemon[0].weight} Kg</p>
                        <p>{infoDoPokemon[0].types[0].type.name}</p>
                        <p><img src={infoDoPokemon[0].sprites.front_default}/></p>
                    </div>
                )
            }
    };
    
    return(
        <div className="container">

            <h1>Pokémon</h1>

            <select onChange={pokemonEscolhido}>

                <option value={"Nenhum"} >Nenhum</option>
                {pokemonsSelect}
                
            </select>

            {mostrarInfoDoPokemon()}
        </div>
    )
};

export default Pokemon;