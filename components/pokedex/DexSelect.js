import React, { useContext } from "react";
import PokedexContext from "../../contexts/PokedexContext";
import usePokedexList from "../../hooks/usePokedexList";

const DexSelect = () => {
  const { name, handleChange } = useContext(PokedexContext);
  const { pokedex, isLoading } = usePokedexList();

  return (
    <div className="border rounded px-2 py-1">
      <select value={name} onChange={e => handleChange(e.target.value)} className="capitalize">
        {pokedex.map((dex) => {
          return <option key={dex} value={dex} className="">{dex.split("-").join(" ")}</option>;
        })}
      </select>
    </div>
  );
};

export default DexSelect;
