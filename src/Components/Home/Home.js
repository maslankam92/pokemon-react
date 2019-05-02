import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const HomeContainer = styled.div`
  margin: 1rem;
  background: white;
  text-align: center;
  border-radius: 5px;
  padding: 2rem;
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
  margin: 2rem;

  :hover {
    box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.1);
    transition: 0.1s;
  }
`;

const PokemonsContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 1rem auto;
  justify-content: space-around;
`;

const PokemonCard = styled.div`
  width: 20%;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 5px;
  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  max-width: 8rem;

  span {
    font-size: 1rem;
    font-weight: normal;
  }
`;

const CongratulationsContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 1rem auto;
  justify-content: space-around;
`;

const CongratulationsText = styled.div`
  width: 50%;

  h1 {
    margin-top: 3rem;
  }
`;

const starterPokemons = ["bulbasaur", "charmander", "squirtle"];

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [chosenPokemon, setChosenPokemon] = useState();

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

  const catchPokemon = () => {
    const randomIndex = Math.floor(Math.random() * starterPokemons.length);
    const pokemonToSet = pokemons.find(
      pokemon => pokemon.name === starterPokemons[randomIndex]
    );
    setChosenPokemon(pokemonToSet);
  };

  return (
    <HomeContainer>
      {!chosenPokemon && (
        <>
          <h1>Welcome to the Game</h1>
          <h3>Get your Pokemon and start the adventure</h3>
          <Button onClick={catchPokemon}>CATCH!</Button>
        </>
      )}
      {pokemons && !chosenPokemon && (
        <PokemonsContainer>
          {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id}>
              <img alt={pokemon.name} src={pokemon.sprites.front_default} />
              <p>{pokemon.name}</p>
              <span>EXP: {pokemon.base_experience}</span>
            </PokemonCard>
          ))}
        </PokemonsContainer>
      )}

      {chosenPokemon && (
        <CongratulationsContainer>
          <CongratulationsText>
            <h1>CONGRATULATIONS!</h1>
            <h3>This is you first Pokemon!</h3>
          </CongratulationsText>
          <PokemonCard>
            <img
              alt={chosenPokemon.name}
              src={chosenPokemon.sprites.front_default}
            />
            <p>{chosenPokemon.name}</p>
            <span>EXP: {chosenPokemon.base_experience}</span>
          </PokemonCard>
        </CongratulationsContainer>
      )}
    </HomeContainer>
  );
};

export default Home;
