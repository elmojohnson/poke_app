import { useContext, useEffect, useState } from "react";
import PokedexContext from "../contexts/PokedexContext";
import PokeApi from "../lib/PokeApi";

const usePokedexByName = () => {
  const { name } = useContext(PokedexContext);
  const [entries, setEntries] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // Config
  const limit = 15;
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0); // Overall count of entries
  const [currentCount, setCurrentCount] = useState(0); // Count of the displayed entries

  const loadMoreEntries = () => setOffset((prev) => prev + limit);

  // Load pokedex entries
  useEffect(() => {
    (async () => {
      setLoading(true);
      setOffset(0);
      setEntries([]);

      const data = await PokeApi.getPokedexByName(name);
      let pk = data.pokemon_entries;

      setCount(pk.length);
      setEntries(pk.splice(offset, limit));
      setLoading(false);
    })();
  }, [name]);

  // Load more entries when offset is changed
  useEffect(() => {
    (async () => {
      const data = await PokeApi.getPokedexByName(name);
      let pk = [...entries, ...data.pokemon_entries.splice(offset, limit)];

      setCurrentCount(pk.length);
      setEntries(pk);
    })();
  }, [offset]);

  return { entries, loadMoreEntries, count, currentCount, isLoading };
};

export default usePokedexByName;
