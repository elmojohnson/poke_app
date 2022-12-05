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

  useEffect(() => {
    (async () => {
      const result = await PokeApi.getPokemonByName(name);
      setPokemon({
        defaultSprite: result.sprites.front_default,
      });
    })();
  }, []);

  return { pokemon };
};

export default usePokemonByName;
