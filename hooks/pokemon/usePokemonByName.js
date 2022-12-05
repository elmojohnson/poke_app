import { useEffect, useState } from "react";
import PokeApi from "../../lib/PokeApi";

const usePokemonByName = (name) => {
  const [pokemon, setPokemon] = useState({
    defaultSprite: "",
    officialArtworkSprite: "",
    types: [],
    ht: 0,
    wt: 0,
  });
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await PokeApi.getPokemonByName(name);
      setPokemon({
        defaultSprite: result.sprites.front_default,
      });
      setLoading(false);
    })();
  }, []);

  return { pokemon };
};

export default usePokemonByName;
