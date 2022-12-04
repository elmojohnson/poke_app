import React from "react";
import NavItem from "../../components/navigation/NavItem";
import Container from "../../components/utils/Container";
import { CgPokemon } from "react-icons/cg";
import { BiMenuAltLeft } from "react-icons/bi";

const Navbar = () => {
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
  return (
    <div className="bg-white shadow py-2">
      <Container>
        <div className="flex items-center md:space-x-7 space-x-2">
            <button className="bg-base p-2 rounded md:hidden flex hover:bg-neutral-200"><BiMenuAltLeft /></button>
          <CgPokemon className="font-bold text-4xl" />
          <div className="md:flex hidden items-center space-x-4">
            {navItems.map((item) => {
              return (
                <NavItem key={item.label} label={item.label} href={item.href} />
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
