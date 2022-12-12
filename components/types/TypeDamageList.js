import React from "react";
import { motion } from "framer-motion";

const TypeDamageList = ({ data }) => {
  return (
    <td className="border p-3 align-top text-center">
      {data.length === 0 ? (
        "None"
      ) : (
        <div className="flex flex-col items-center space-y-2">
          {data.map((t, i) => {
            return (
              <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                key={i}
                src={`/types/${t.name}.png`}
                alt={t}
              />
            );
          })}
        </div>
      )}
    </td>
  );
};

export default TypeDamageList;
