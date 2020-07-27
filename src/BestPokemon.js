import React from "react";

const BestPokemon = (props) => {
  console.log(props);
  return (
    <>
      <p>My favourite Pokemon is Squirtle"</p>
      <ul>
        {props.abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
    </>
  );
};

export default BestPokemon;
