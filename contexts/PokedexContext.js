import { createContext } from "react";

const PokedexContext = createContext({
    name: "",
    handleChange: () => {}
})

export default PokedexContext;