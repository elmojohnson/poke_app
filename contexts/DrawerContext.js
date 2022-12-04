import { createContext } from "react";

const DrawerContext = createContext({
    isOpen: false,
    navItems: [],
    handleOpen: () => {},
})

export default DrawerContext;