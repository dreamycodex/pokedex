import React, { useState, useEffect } from "react";

const BestPokemonFetcher = () => {
  const [bestPokemon, setBestPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBestPokemon(data);
      });
  }, []);

  if (!bestPokemon) {
    return null;
  } else {
    //console.log("Hello", bestPokemon);
    return <BestPokemon pokemon={bestPokemon} />;
  }
};

const BestPokemon = (props) => {
  console.log(props);
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

export default BestPokemonFetcher;
