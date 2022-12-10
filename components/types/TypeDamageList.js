import React from "react";
import { motion } from "framer-motion";

const TypeDamageList = ({ label, data }) => {
  return (
    <div className="flex justify-between">
      <p className="font-semibold">{label}</p>
      {data.length === 0 ? (
        <p className="text-muted">None</p>
      ) : (
        <div className="grid md:grid-cols-5 grid-cols-3 gap-3 w-fit">
          {data.map((t, i) => {
            return (
              <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                key={i}
                src={`/types/${t.name}.png`}
                alt={t}
                className="w-20"
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TypeDamageList;
