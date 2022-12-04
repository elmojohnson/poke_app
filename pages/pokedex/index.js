import React, { useState } from 'react'
import Layout from "../../layouts/main/Layout";

// Context
import PokedexContext from "../../contexts/PokedexContext";

const Pokedex = () => {
    const [name, setName] = useState("kanto");
    const handleChange = (value) => setName(value);
    
  return (
    <Layout>
        <PokedexContext.Provider value={{name, handleChange}}>
            <h1>Pokedex</h1>
        </PokedexContext.Provider>
    </Layout>
  )
}

export default Pokedex