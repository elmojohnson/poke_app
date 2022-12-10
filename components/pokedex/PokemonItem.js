import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PokeApi from "../../lib/PokeApi";

const PokemonItem = ({ entry_number, name }) => {
  const [sprite, setSprite] = useState("");
  const [types, setTypes] = useState([]);

  // Get pokemon by species
  useEffect(() => {
    (async () => {
      const species = await PokeApi.getPokemonSpeciesByName(name);
      const pokemon = await PokeApi.getPokemonByName(species.id);
      setSprite(pokemon.sprites.front_default);
      setTypes(pokemon.types.map((t) => t.type.name));
    })();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      className="bg-white rounded overflow-hidden h-20 flex items-center hover:cursor-pointer hover:shadow-xl"
    >
      <AnimatePresence>
        {sprite ? (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={sprite}
            alt={name}
            className="h-20 w-20 p-2"
          />
        ) : (
          <div className="h-20 w-20 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-neutral-200 rounded-full h-12 w-12 m-4 animate-pulse"
            />
          </div>
        )}
      </AnimatePresence>
      <div className="leading-none flex flex-col space-y-0 px-3 w-full mr-3">
        <span className="font-semibold text-xs text-neutral-400">
          No. {String(entry_number).padStart(3, "0")}
        </span>
        <h1 className="font-bold text-lg capitalize">{name}</h1>
      </div>
    </motion.div>
  );
};

export default PokemonItem;
