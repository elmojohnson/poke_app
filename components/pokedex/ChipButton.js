import { motion } from "framer-motion";

const ChipButton = ({ value, checkedValue, handleChange }) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={`text-center ${
        value === checkedValue ? "bg-black text-white hover:bg-neutral-600" : "bg-neutral-200 hover:bg-neutral-300 hover:text-black"
      } rounded-lg py-1 px-2 outline-none hover:cursor-pointer`}
      onClick={() => handleChange(value)}
    >
      <p className="w-fit capitalize truncate">{value.split("-").join(" ")}</p>
    </motion.button>
  );
};

export default ChipButton;
