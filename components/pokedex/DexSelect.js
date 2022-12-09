import React, { useContext } from "react";
import PokedexContext from "../../contexts/PokedexContext";
import usePokedexList from "../../hooks/pokedex/usePokedexList";
import ChipButton from "./ChipButton";

const DexSelect = () => {
  const { name, handleChange } = useContext(PokedexContext);
  const { pokedex, isLoading } = usePokedexList();

  return (
    <div className="flex items-start space-x-4 overflow-x-scroll no-scrollbar w-full">
      {
        pokedex.map(p => {
          return <ChipButton key={p} value={p} checkedValue={name} handleChange={handleChange} />
        })
      }
    </div>
  );
};

export default DexSelect;
