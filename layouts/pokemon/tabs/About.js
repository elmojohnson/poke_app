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
    <div>pokemon</div>
  );
};

export default About;
