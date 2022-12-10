import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PokeApi from "../../lib/PokeApi";

const usePokemonByName = () => {
  const router = useRouter();
  const [pokemon, setPokemon] = useState({
    national_id: 0,
    name: "",
    official_sprite: "",
    types: [],
    ht: 0,
    wt: 0,
    dex_entry_txt: "",
  });
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    router.isReady &&
      (async () => {
        setLoading(true);

        const pokemonResult = await PokeApi.getPokemonByName(router?.query?.id);
        console.log(pokemonResult);
        setPokemon({
          national_id: pokemonResult.id,
          name: pokemonResult.name,
          official_sprite: pokemonResult.sprites.other["official-artwork"].front_default,
          types: pokemonResult.types.map(t => t.type.name),
          ht: pokemonResult.height,
          wt: pokemonResult.weight,
          dex_entry_txt: "",
        });

        setLoading(false);
      })();
  }, [router]);

  return { pokemon, isLoading };
};

export default usePokemonByName;
