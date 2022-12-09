import React from "react";
import DexSelect from "../../components/pokedex/DexSelect";

const Filter = () => {
  return (
    <div className="flex flex-col space-y-3">
      <h5 className="font-semibold text-muted">Filter by Pokedex Entry</h5>
      <DexSelect />
    </div>
  );
};

export default Filter;
