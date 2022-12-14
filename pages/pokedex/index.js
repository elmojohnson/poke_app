import React, { useState } from "react";

// Context
import PokedexContext from "../../contexts/PokedexContext";
import Filter from "../../layouts/pokedex/Filter";
import PokedexList from "../../layouts/pokedex/PokedexList";

const Pokedex = () => {
  const [name, setName] = useState("national");
  const handleChange = (value) => setName(value);

  return (
      <PokedexContext.Provider value={{ name, handleChange }}>
        <div className="flex flex-col space-y-4">
          <Filter />
          <PokedexList />
        </div>
      </PokedexContext.Provider>
  );
};

export default Pokedex;
