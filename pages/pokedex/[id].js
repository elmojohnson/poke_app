import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import PokemonContext from "../../contexts/PokemonContext";
import usePokemonByName from "../../hooks/pokemon/usePokemonByName";
import Layout from "../../layouts/main/Layout";
import LoadingScreen from "../../components/utils/LoadingScreen";

// Tabs
import About from "../../layouts/pokemon/tabs/About";
import Evolution from "../../layouts/pokemon/tabs/Evolution";
import Location from "../../layouts/pokemon/tabs/Location";
import Moves from "../../layouts/pokemon/tabs/Moves";
import Stats from "../../layouts/pokemon/tabs/Stats";
import Types from "../../layouts/pokemon/tabs/Types";

const Pokemon = () => {
  const tabs = [
    {
      label: "About",
      component: <About />,
    },
    {
      label: "Types",
      component: <Types />,
    },
    {
      label: "Stats",
      component: <Stats />,
    },
    {
      label: "Evolution",
      component: <Evolution />,
    },
    {
      label: "Moves",
      component: <Moves />,
    },
    {
      label: "Location",
      component: <Location />,
    },
  ];
  const [currentTab, setCurrentTab] = useState(0);

  const { pokemon, isLoading } = usePokemonByName();

  return (
    <Layout>
      <PokemonContext.Provider value={pokemon}>
        <AnimatePresence>
          {isLoading ? (
            <LoadingScreen />
          ) : (
            <motion.div className="flex lg:flex-row flex-col lg:space-x-3 space-x-0 lg:space-y-0 space-y-8">
              <div className="lg:w-1/3 w-full">
                <div className="flex flex-col lg:items-start items-center leading-none lg:fixed">
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [-10, 0, -10, 0] }}
                    src={pokemon.official_sprite}
                    className="w-80 mb-4"
                  />
                  <span className="text-muted text-xs">
                    No. {String(pokemon.national_id).padStart(3, "0")}
                  </span>
                  <h1 className="capitalize font-bold lg:text-3xl text-4xl">
                    {pokemon.name}
                  </h1>
                  <div className="flex items-center space-x-2 mt-2">
                    {pokemon.types.map((t) => {
                      return (
                        <img
                          key={t}
                          src={`/types/${t}.png`}
                          className="lg:w-24 w-28"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 lg:w-2/3 w-full">
                <div className="flex items-center bg-neutral-200 rounded px-4 py-1 font-semibold lg:overflow-x-hidden overflow-x-scroll no-scrollbar">
                  {tabs.map((tab, i) => {
                    return (
                      <motion.button
                        key={i}
                        className={`px-4 py-1 rounded ${
                          currentTab === i && "bg-base shadow"
                        } outline-none`}
                        onClick={() => setCurrentTab(i)}
                      >
                        {tab.label}
                      </motion.button>
                    );
                  })}
                </div>
                {tabs[currentTab].component}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </PokemonContext.Provider>
    </Layout>
  );
};

export default Pokemon;
