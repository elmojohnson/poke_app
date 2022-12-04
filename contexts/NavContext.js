import { createContext } from "react";

const NavContext = createContext({
    isOpen: false,
    navItems: [],
    handleOpen: () => {},
})

export default NavContext;