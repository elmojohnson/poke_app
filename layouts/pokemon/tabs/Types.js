import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import TypeItem from "../../../components/types/TypeItem";
import PokemonContext from "../../../contexts/PokemonContext";

const Types = () => {
  const { types } = useContext(PokemonContext);
  return (
    <div className="flex flex-col space-y-4">
      {types.map((t, i) => {
        return <TypeItem key={i} type={t} index={i} />;
      })}
    </div>
  );
};

export default Types;
