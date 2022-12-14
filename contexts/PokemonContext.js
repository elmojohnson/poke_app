import { createContext } from "react";

const PokemonContext = createContext({
    national_id: 0,
    name: "",
    official_sprite: "",
    sprites: [],
    types: [],
    ht: 0,
    wt: 0,
    dex_entry_txt: "",
    abilities: []
});

export default PokemonContext;