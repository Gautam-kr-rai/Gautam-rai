import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import hero from "../assets/hero.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Skills & Tools", path: "/skills_tools" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={hero} alt="" className="h-6 w-6" />
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Gautam Rai
          </span>
        </NavLink>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative group transition-all duration-300 ${
                  isActive
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              {item.name}

              {/* underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </nav>

        {/* MOBILE HAMBURGER */}
        <div className="md:hidden text-white text-xl cursor-pointer">
          <FaBars onClick={() => setOpen(true)} />
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 w-64 h-full bg-neutral-900 border-l border-white/10 p-6"
            >
              {/* Close button */}
              <div className="flex justify-end mb-6 text-white text-xl cursor-pointer">
                <FaTimes onClick={() => setOpen(false)} />
              </div>

              {/* Links */}
              <div className="flex flex-col gap-6 text-gray-300">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-cyan-400 text-lg"
                        : "hover:text-white text-lg"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;