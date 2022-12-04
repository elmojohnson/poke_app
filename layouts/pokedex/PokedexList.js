import React from "react";
import usePokedexByName from "../../hooks/pokedex/usePokedexByName";
import LoadingScreen from "../../components/utils/LoadingScreen";
import PokemonItem from "../../components/pokedex/PokemonItem";

const PokedexList = () => {
  const { entries, count, currentCount, loadMoreEntries, isLoading } =
    usePokedexByName();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
        {entries.map((pokemon) => {
          return (
            <PokemonItem
              key={pokemon.entry_number}
              entry_number={pokemon.entry_number}
              name={pokemon.pokemon_species.name}
              species_url={pokemon.pokemon_species.url}
            />
          );
        })}
      </div>
      <p>
        {currentCount} / {count}
      </p>
      <button onClick={loadMoreEntries}>Load more</button>
    </div>
  );
};

export default PokedexList;
