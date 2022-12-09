// Context
import { useContext } from "react";
import DrawerContext from "../../contexts/NavContext";

// Components
import NavItem from "../../components/navigation/NavItem";
import Container from "../../components/utils/Container";

// Lib
import { CgPokemon } from "react-icons/cg";
import { BiMenuAltLeft } from "react-icons/bi";

const Navbar = () => {
    const {navItems, handleOpen} = useContext(DrawerContext)
    
  return (
    <div className="bg-primary shadow py-2 sticky top-0 z-10 text-white">
      <Container>
        <div className="flex items-center justify-between">
          <button className="text-2xl rounded md:hidden block hover:text-red-200" onClick={handleOpen}>
            <BiMenuAltLeft />
          </button>
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
