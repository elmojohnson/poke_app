import { motion } from "framer-motion";

const ChipButton = ({ value, checkedValue, handleChange }) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={`text-center ${
        value === checkedValue ? "bg-black text-white" : "bg-white"
      } rounded-lg py-1 px-2 outline-none hover:cursor-pointer hover:bg-neutral-200 hover:text-black`}
      onClick={() => handleChange(value)}
    >
      <p className="w-fit capitalize truncate">{value.split("-").join(" ")}</p>
    </motion.button>
  );
};

export default ChipButton;
