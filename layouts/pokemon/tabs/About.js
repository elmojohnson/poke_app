import { motion, AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import PokemonContext from "../../../contexts/PokemonContext";

const About = () => {
  const {
    dex_entry_txt,
    abilities,
    ht,
    wt,
    front_spr,
    back_spr,
    front_spr_shiny,
    back_spr_shiny,
  } = useContext(PokemonContext);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col space-y-4"
      >
        <div>
          <b>Sprites</b>
          <div className="flex items-center space-x-3 sm:overflow-x-hidden overflow-x-scroll no-scrollbar">
            <motion.img initial={{scale: 0}} animate={{scale: 1}} transition={{delay: 0.5}} src={front_spr} />
            <motion.img initial={{scale: 0}} animate={{scale: 1}} transition={{delay: 0.5}} src={back_spr} />
            <motion.img initial={{scale: 0}} animate={{scale: 1}} transition={{delay: 0.5}} src={front_spr_shiny} />
            <motion.img initial={{scale: 0}} animate={{scale: 1}} transition={{delay: 0.5}} src={back_spr_shiny} />
          </div>
        </div>

        <div>
          <b>Dex Entry</b>
          <p className="text-justify">{dex_entry_txt}</p>
        </div>

        <div className="flex items-center space-x-3">
          <b>Abilities:</b>
          <p className="capitalize">
            {/* {abilities
          .map((a, i) => {
            a.ability.name;
          })
          .join(", ")} */}
            {abilities
              .map((a) =>
                a.is_hidden ? `${a.ability.name} (hidden)` : a.ability.name
              )
              .join(", ")}
          </p>
        </div>

        <div className="flex items-center space-x-3 mt-3 text-sm">
          <p>
            <b>HT:</b> {ht}
          </p>
          <p>
            <b>WT:</b> {wt}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default About;
