import React, { useContext } from "react";
import PokedexContext from "../../contexts/PokedexContext";
import usePokedexList from "../../hooks/pokedex/usePokedexList";

const DexSelect = () => {
  const { name, handleChange } = useContext(PokedexContext);
  const { pokedex, isLoading } = usePokedexList();

  return (
    <div className="bg-white border rounded px-2">
      <select value={name} onChange={e => handleChange(e.target.value)} className="capitalize bg-white outline-none py-1">
        {pokedex.map((dex) => {
          return <option key={dex} value={dex} className="">{dex.split("-").join(" ")}</option>;
        })}
      </select>
    </div>
  );
};

export default DexSelect;
