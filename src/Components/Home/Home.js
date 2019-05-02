import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const HomeContainer = styled.div`
  margin: 1rem;
  background: white;
  text-align: center;
  border-radius: 5px;
  padding: 1rem;
`;

const Button = styled.button`
  border-radius: 5px;
  background: white;
  font-size: 1.2rem;
  border: 2px solid tomato;
  color: tomato;
  padding: 1rem 2rem;
  cursor: pointer;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  transition: 0.1s;
  outline: none;

  :hover {
    box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.1);
    transition: 0.1s;
  }
`;

const starterPokemons = ["charmander", "bulbasaur", "squirtle"];

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon/";
    const pokemonsPromiseList = await starterPokemons.map(pokemon => {
      try {
        return axios(`${URL}${pokemon}`);
      } catch (e) {
        throw e;
      }
    });
    const pokemonsData = await Promise.all(pokemonsPromiseList);
    const pokemons = pokemonsData.map(pokemonData => pokemonData.data);
    setPokemons(pokemons);
    console.log(pokemons);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <HomeContainer>
      <h1>Welcome to the Game</h1>
      <h3>Get your Pokemon and start the adventure</h3>
      <Button>CATCH!</Button>
      {pokemons &&
        pokemons.map(pokemon => <p key={pokemon.name}>{pokemon.name}</p>)}
    </HomeContainer>
  );
};

export default Home;
