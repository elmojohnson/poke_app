import React, { useState } from "react";
import Navbar from "./Navbar";
import Container from "../../components/utils/Container";

import DrawerContext from "../../contexts/DrawerContext";
import Drawer from "./Drawer";

const Layout = ({ children }) => {
  // Drawer state
  const [isOpen, setOpen] = useState(false);
  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Pokedex",
      href: "/pokedex",
    },
    {
      label: "Types",
      href: "/types",
    },
    {
      label: "Items",
      href: "/items",
    },
  ];
  const handleOpen = () => setOpen(!isOpen);

  return (
    <DrawerContext.Provider value={{isOpen, navItems, handleOpen}}>
      <div className="bg-base h-screen relative">
        <Navbar />
        <Container>{children}</Container>
        <Drawer />
      </div>
    </DrawerContext.Provider>
  );
};

export default Layout;
