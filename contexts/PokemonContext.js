import { createContext } from "react";

const PokemonContext = createContext({
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
    abilities: []
});

export default PokemonContext;