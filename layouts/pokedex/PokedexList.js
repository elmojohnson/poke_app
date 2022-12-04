import React from "react";
import usePokedexByName from "../../hooks/usePokedexByName";
import LoadingScreen from "../../components/utils/LoadingScreen";

const PokedexList = () => {
  const { entries, count, currentCount, loadMoreEntries, isLoading } = usePokedexByName();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {entries.map((pokemon) => {
          return (
            <p key={pokemon.entry_number}>{pokemon.pokemon_species.name}</p>
          );
        })}
      </div>
      <p>{currentCount} / {count}</p>
      <button onClick={loadMoreEntries}>Load more</button>
    </div>
  );
};

export default PokedexList;
