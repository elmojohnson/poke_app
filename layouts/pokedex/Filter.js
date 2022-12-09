import React from "react";
import DexSelect from "../../components/pokedex/DexSelect";

const Filter = () => {
  return (
    <div className="flex flex-col space-y-2">
      <h5 className="font-semibold text-muted">Filter Pokedex</h5>
      <DexSelect />
    </div>
  );
};

export default Filter;
