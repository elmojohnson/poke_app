import React, { useContext } from "react";
import NavContext from "../../contexts/NavContext";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";
import NavItem from "../../components/navigation/NavItem";

const Drawer = () => {
  const { isOpen, handleOpen, navItems } = useContext(NavContext);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="h-screen w-full absolute top-0 left-0 md:hidden z-20">
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            exit={{ x: -500 }}
            transition={{ type: "keyframes" }}
            className="w-2/3 bg-white z-10 shadow p-4 relative h-screen"
          >
            <MdClose
              className="absolute right-4 top-4 hover:cursor-pointer"
              onClick={handleOpen}
            />
            <div className="flex flex-col">
              {
                navItems.map((item) => {
                  return <NavItem key={item.label} label={item.label} href={item.href} />
                })
              }
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.05 }}
            className="w-full bg-black absolute top-0 h-screen z-0"
            onClick={handleOpen}
          />
        </div>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
