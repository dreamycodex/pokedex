import React from "react";

const Logo = () => {
  const appName = "Pokedex";

  return (
    <header>
      <h1>{appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="logo"
      />
    </header>
  );
};

const BestPokemon = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <>
      <p>My favourite Pokemon is Squirtle"</p>
      <ul>
        {abilities.map((trait) => (
          <li>{trait}</li>
        ))}
      </ul>
    </>
  );
};

const CaughtPokemon = () => {
  const date = new Date().toLocaleDateString();
  return <p>Caught 0 Pokemon on {date}</p>;
};

function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
}

export default App;
