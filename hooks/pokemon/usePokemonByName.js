import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PokeApi from "../../lib/PokeApi";

const usePokemonByName = () => {
  const router = useRouter();
  const [pokemon, setPokemon] = useState({
    national_id: 0,
    name: "",
    official_sprite: "",
    front_spr: "",
    back_spr: "",
    front_spr_shiny: "",
    back_spr_shiny: "",
    types: [],
    ht: 0,
    wt: 0,
    dex_entry_txt: "",
    abilities: [],
  });
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    router.isReady &&
      (async () => {
        setLoading(true);

        // Get pokemon info and species
        const pokemonResult = await PokeApi.getPokemonByName(router?.query?.id);
        const species = await PokeApi.resource(pokemonResult.species.url);

        setPokemon({
          national_id: pokemonResult.id,
          name: pokemonResult.name,
          official_sprite:
            pokemonResult.sprites.other["official-artwork"].front_default,
          front_spr: pokemonResult.sprites.front_default,
          back_spr: pokemonResult.sprites.back_default,
          front_spr_shiny: pokemonResult.sprites.front_shiny,
          back_spr_shiny: pokemonResult.sprites.back_shiny,
          types: pokemonResult.types.map((t) => t.type.name),
          ht: pokemonResult.height,
          wt: pokemonResult.weight,
          dex_entry_txt: species.flavor_text_entries.filter(
            (el) => el.language.name === "en"
          )[0].flavor_text,
          abilities: pokemonResult.abilities,
        });

        setLoading(false);
      })();
  }, [router]);

  return { pokemon, isLoading };
};

export default usePokemonByName;
