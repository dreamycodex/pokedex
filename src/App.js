import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App() {
  function LogWhenClicked() {
    console.log("Button is clicked");
  }
  return (
    <div>
      <Logo appName="Pokedex" handleClick={LogWhenClicked} />

      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </div>
  );
}

export default App;
