import React from "react";
import DexSelect from "../../components/pokedex/DexSelect";

const Filter = () => {
  return (
    <div className="flex items-center justify-between bg-white shadow py-2 px-4 rounded">
      <h5 className="font-semibold">Filter Pokedex</h5>
      <DexSelect />
    </div>
  );
};

export default Filter;
