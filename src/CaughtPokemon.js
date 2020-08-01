import React, { useState } from "react";

const CaughtPokemon = (props) => {
  console.log(props);
  const [totalCaught, setTotalCaught] = useState(0);

  function incrementTotal() {
    setTotalCaught(totalCaught + 1);
  }
  return (
    <div>
      <p>
        Caught {totalCaught} Pokemon on {props.date}
        <button onClick={incrementTotal}>Add Pokemon</button>
      </p>
    </div>
  );
};

export default CaughtPokemon;
