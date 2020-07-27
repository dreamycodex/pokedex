import React from "react";

const BestPokemon = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <>
      <p>My favourite Pokemon is Squirtle"</p>
      <ul>
        {abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
    </>
  );
};

export default BestPokemon;
