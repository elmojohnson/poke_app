import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PokeApi from "../../lib/PokeApi";

const usePokemonByName = () => {
  const router = useRouter();
  const [pokemon, setPokemon] = useState({
    national_id: 0,
    name: "",
    official_sprite: "",
    sprites: [],
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

        // Sprites of pokemon
        let sprArr = [];
        sprArr.push(pokemonResult.sprites.other["official-artwork"].front_default);
        sprArr.push(pokemonResult.sprites.back_default);
        sprArr.push(pokemonResult.sprites.back_female);
        sprArr.push(pokemonResult.sprites.back_shiny);
        sprArr.push(pokemonResult.sprites.back_shiny_female);
        sprArr.push(pokemonResult.sprites.front_default);
        sprArr.push(pokemonResult.sprites.front_female);
        sprArr.push(pokemonResult.sprites.front_shiny);
        sprArr.push(pokemonResult.sprites.front_shiny_female);

        setPokemon({
          national_id: pokemonResult.id,
          name: pokemonResult.name,
          official_sprite: pokemonResult.sprites.other["official-artwork"].front_default,
          sprites: sprArr.filter(el => el !== null),
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
