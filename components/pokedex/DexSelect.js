import React, { useContext } from "react";
import PokedexContext from "../../contexts/PokedexContext";
import usePokedexList from "../../hooks/pokedex/usePokedexList";
import DexRadioItem from "./DexRadioItem";

const DexSelect = () => {
  const { name, handleChange } = useContext(PokedexContext);
  const { pokedex, isLoading } = usePokedexList();

  return (
    <div className="grid grid-cols-5 gap-2">
      {
        pokedex.map(p => {
          return <DexRadioItem key={p} label={p} value={p} checkedValue={name} handleChange={handleChange} />
        })
      }
    </div>
  );
};

export default DexSelect;
