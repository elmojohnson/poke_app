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
    <PokemonContext.Provider value={pokemon}>
      <AnimatePresence>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <motion.div className="flex flex-col space-y-2">
            <div className="flex items-center border-b font-semibold lg:overflow-x-hidden overflow-x-scroll no-scrollbar">
              {tabs.map((tab, i) => {
                return (
                  <AnimatePresence key={i}>
                    <div
                      className="px-6 py-2 font-semibold relative hover:cursor-pointer"
                      onClick={() => setCurrentTab(i)}
                    >
                      <p>{tab.label}</p>
                      {i === currentTab && (
                        <motion.div
                          layoutId="underline"
                          className="h-0.5 bg-primary w-full absolute right-0 bottom-0"
                        />
                      )}
                    </div>
                  </AnimatePresence>
                );
              })}
            </div>
            <AnimatePresence>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {tabs[currentTab].component}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </PokemonContext.Provider>
  );
};

export default Pokemon;
