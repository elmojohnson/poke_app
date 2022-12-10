import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import TypeDamageList from "./TypeDamageList";
import PokeApi from "../../lib/PokeApi";

const TypeItem = ({ type, index }) => {
  const [doubleDmgFrom, setDoubleDmgFrom] = useState([]);
  const [doubleDmgTo, setDoubleDmgTo] = useState([]);
  const [halfDmgFrom, setHalfDmgFrom] = useState([]);
  const [halfDmgTo, setHalfDmgTo] = useState([]);
  const [noDmgFrom, setNoDmgFrom] = useState([]);
  const [noDmgTo, setNoDmgTo] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await PokeApi.getTypeByName(type);
      setDoubleDmgFrom(result.damage_relations.double_damage_from);
      setDoubleDmgTo(result.damage_relations.double_damage_to);
      setHalfDmgFrom(result.damage_relations.half_damage_from);
      setHalfDmgTo(result.damage_relations.half_damage_from);
      setNoDmgFrom(result.damage_relations.no_damage_from);
      setNoDmgTo(result.damage_relations.no_damage_to);
    })();
  }, []);

  return (
    <div className="bg-white rounded p-4">
      <div className="flex flex-col space-y-1">
        <p className="font-bold text-sm text-muted">Type No. {index + 1}</p>
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          src={`/types/${type}.png`}
          alt={type}
          className="w-32"
        />
      </div>

      <div className="flex flex-col space-y-4 mt-3">
        <TypeDamageList label="2X Damage From" data={doubleDmgFrom} />
        <TypeDamageList label="2X Damage To" data={doubleDmgTo} />
        <TypeDamageList label="Half Damage From" data={halfDmgFrom} />
        <TypeDamageList label="Half Damage To" data={halfDmgTo} />
        <TypeDamageList label="Immune To" data={noDmgFrom} />
        <TypeDamageList label="Immune From" data={noDmgTo} />
      </div>
    </div>
  );
};

export default TypeItem;
