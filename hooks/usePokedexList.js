import React, { useEffect, useState } from 'react'
import PokeApi from "../lib/PokeApi";

const usePokedexList = () => {
    const [pokedex, setPokedex] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const result = await PokeApi.getPokedexsList();
            setPokedex(result.results.map(el => el.name));
            setLoading(false);
        })()
    }, [])
  
    return {pokedex, isLoading}
}

export default usePokedexList