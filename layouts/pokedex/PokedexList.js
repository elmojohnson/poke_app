import React from "react";
import usePokedexByName from "../../hooks/pokedex/usePokedexByName";
import LoadingScreen from "../../components/utils/LoadingScreen";
import PokemonItem from "../../components/pokedex/PokemonItem";

import {motion} from "framer-motion";

const PokedexList = () => {
  const { entries, count, currentCount, loadMoreEntries, isLoading } = usePokedexByName();

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
      <div className="flex items-end justify-between py-6">
        <p className="text-sm font-semibold text-muted">
          {currentCount} / {count}
        </p>
        {currentCount >= count ? null : (
          <motion.button
          whileHover={{scale: 1.05}}
          whileTap={{scale: 1}}
          className="btn-primary" onClick={loadMoreEntries}>
            Load more
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default PokedexList;
