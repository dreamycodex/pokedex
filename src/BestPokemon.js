import React, { useState, useEffect } from "react";

const BestPokemonFetcher = (props) => {
  const [bestPokemon, setBestPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBestPokemon(data);
      });
  }, [props.pokemonId]);

  return !bestPokemon ? null : (
    //console.log("Hello", bestPokemon);
    <BestPokemon pokemon={bestPokemon} />
  );
};

const BestPokemon = (props) => {
  //console.log(props);
  console.log(props.pokemon.abilities);
  return (
    <div>
      <p>My favourite Pokemon is Squirtle</p>
      <ul>
        {props.pokemon.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  );
};

function BestPokemonSelector() {
  const [pokemonId, setPokemonId] = useState(null);

  function handleBulbasaurClick() {
    setPokemonId(1);
  }
  function handleCharmanderClick() {
    setPokemonId(4);
  }

  return (
    <div>
      <button onClick={handleBulbasaurClick}>Fetch Bulbasaur</button>
      <button onClick={handleCharmanderClick}>Fetch Charmander</button>
      {pokemonId ? <BestPokemonFetcher pokemonId={pokemonId} /> : null}
    </div>
  );
}

export default BestPokemonSelector;
