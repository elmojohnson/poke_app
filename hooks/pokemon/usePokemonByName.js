import React, { useEffect, useState } from 'react'
import PokeApi from "../../lib/PokeApi";

const usePokemonByName = (name) => {
    const [sprite, setSprite] = useState("");

    useEffect(() => {
        (async () => {
            const pokemon = await PokeApi.getPokemonByName(name);
            setSprite(pokemon.sprites.front_default)
        })()
    }, [])

    return {sprite}
}

export default usePokemonByName