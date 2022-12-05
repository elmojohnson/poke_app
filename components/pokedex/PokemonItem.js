import React from "react";
import usePokemonByName from "../../hooks/pokemon/usePokemonByName";
import { AnimatePresence, motion } from "framer-motion";

const PokemonItem = ({ entry_number, name }) => {
  const { pokemon } = usePokemonByName(name);
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    className="bg-white shadow rounded overflow-hidden h-20 flex items-center">
      <AnimatePresence>
        {pokemon.defaultSprite ? (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{delay: 0.5}}
            src={pokemon.defaultSprite}
            alt={name}
            className="h-20 w-20"
          />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-neutral-200 h-20 w-20 animate-pulse"
          />
        )}
      </AnimatePresence>
      <div className="leading-none flex flex-col space-y-0 px-3">
        <span className="font-semibold text-xs text-neutral-400">No. {String(entry_number).padStart(3, "0")}</span>
        <h1 className="font-bold text-lg capitalize">{name}</h1>
      </div>
    </motion.div>
  );
};

export default PokemonItem;
