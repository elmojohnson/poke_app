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

      <div className="overflow-x-scroll mt-4">
        <table className="table-auto w-full bg-base">
          <thead>
            <tr>
              <th className="p-2 border">2x Dmg From</th>
              <th className="p-2 border">2x Dmg To</th>
              <th className="p-2 border">1/2 Dmg From</th>
              <th className="p-2 border">1/2 Dmg To</th>
              <th className="p-2 border">Immune To</th>
              <th className="p-2 border">Immune From</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TypeDamageList data={doubleDmgFrom} />
              <TypeDamageList data={doubleDmgTo} />
              <TypeDamageList data={halfDmgFrom} />
              <TypeDamageList data={halfDmgTo} />
              <TypeDamageList data={noDmgFrom} />
              <TypeDamageList data={noDmgTo} />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TypeItem;
